'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllMemberConfigs } from '@/member-zones/registry';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Sparkles, 
  Code2, 
  Gamepad2, 
  Bike, 
  Flame, 
  ArrowRight,
  Shield,
  Home
} from 'lucide-react';

export default function MemberSelectorPage() {
  const router = useRouter();
  const members = getAllMemberConfigs();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const totalMembers = members.length;
  const currentMember = members[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalMembers);
  }, [totalMembers]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalMembers) % totalMembers);
  }, [totalMembers]);

  // Auto-roll every 2 seconds as requested, pausing on hover or manual pause
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, handleNext]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Enter') {
        router.push(`/members/${currentMember.slug}`);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, currentMember.slug, router]);

  // Calculate card position offsets
  const getCardOffset = (index: number) => {
    let diff = index - currentIndex;
    if (diff > totalMembers / 2) diff -= totalMembers;
    if (diff < -totalMembers / 2) diff += totalMembers;
    return diff;
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-neutral-100 flex flex-col justify-between overflow-hidden select-none">
      {/* Background Cybernetic Grid & Dynamic Glow */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${currentMember.colorTheme.primary} 0%, transparent 65%), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[170px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: currentMember.colorTheme.primary }}
      />

      {/* Top Bar Header */}
      <header className="relative z-20 px-6 py-5 flex items-center justify-between border-b border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link 
            href="/"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono hover:bg-neutral-800 transition text-neutral-300"
          >
            <Home size={14} /> MAIN MENU
          </Link>
          <div className="h-4 w-[1px] bg-neutral-800" />
          <span className="text-xs font-mono tracking-widest text-neutral-400 flex items-center gap-1.5">
            <Shield size={14} className="text-blue-400" />
            COMPUTER SIGMA // CHARACTER SELECT
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <button 
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition text-neutral-300"
            title={isAutoPlay ? 'Pause Auto-Roll' : 'Resume Auto-Roll (2s)'}
          >
            {isAutoPlay ? (
              <>
                <Pause size={12} className="text-amber-400" />
                <span className="hidden sm:inline">AUTO-ROLL (2s)</span>
              </>
            ) : (
              <>
                <Play size={12} className="text-emerald-400" />
                <span className="hidden sm:inline">PAUSED</span>
              </>
            )}
          </button>
          <div className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-neutral-500"> / {String(totalMembers).padStart(2, '0')}</span>
          </div>
        </div>
      </header>

      {/* Main Game Stage Arena */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* FLOATING TEXT: OUTSIDE LEFT */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col justify-center space-y-4 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMember.slug + '-left'}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <div className="text-xs font-mono tracking-widest uppercase font-semibold text-neutral-500 mb-1">
                    SIGMA ROSTER // #{String(currentIndex + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
                    {currentMember.nickname}
                  </h2>
                  <div className="text-sm font-medium text-neutral-300 font-mono mt-1">
                    {currentMember.name}
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wide border border-neutral-700 bg-neutral-900/80"
                  style={{ color: currentMember.colorTheme.accent }}
                >
                  {currentMember.role}
                </div>

                <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-4 text-xs italic text-neutral-300 leading-relaxed backdrop-blur-sm">
                  {currentMember.quote}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER STAGE: 3D CARD SELECTOR */}
          <div 
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[480px] sm:h-[520px] flex items-center justify-center perspective-[1000px]">
              {members.map((member, index) => {
                const offset = getCardOffset(index);
                const isCenter = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;
                const isVisible = Math.abs(offset) <= 1;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={member.slug}
                    onClick={() => {
                      if (isCenter) {
                        router.push(`/members/${member.slug}`);
                      } else {
                        setCurrentIndex(index);
                      }
                    }}
                    animate={{
                      scale: isCenter ? 1.05 : 0.82,
                      x: isCenter ? 0 : isLeft ? -130 : 130,
                      rotateY: isCenter ? 0 : isLeft ? 24 : -24,
                      zIndex: isCenter ? 30 : 10,
                      opacity: isCenter ? 1 : 0.45,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 24,
                    }}
                    className={`absolute inset-0 rounded-2xl cursor-pointer transition-shadow duration-300 overflow-hidden flex flex-col justify-between p-6 border ${
                      isCenter 
                        ? 'border-neutral-700 ring-2 ring-offset-2 ring-offset-neutral-950 shadow-2xl'
                        : 'border-neutral-800/60 blur-[1px]'
                    }`}
                    style={{
                      backgroundColor: '#0f131a',
                      boxShadow: isCenter ? `0 20px 50px ${member.colorTheme.bgGlow}` : undefined,
                      borderColor: isCenter ? member.colorTheme.primary : undefined,
                    }}
                  >
                    {/* Top Card Badge */}
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-neutral-400">
                        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: member.colorTheme.primary }} />
                        <span>CS BINUS // LVL 4</span>
                      </div>
                      <span className="font-mono text-xs text-neutral-400">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Character Avatar Icon / 3D Hologram Area */}
                    <div className="flex-1 flex flex-col items-center justify-center my-4 relative">
                      <div 
                        className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl flex items-center justify-center text-5xl font-black tracking-wider transition-all duration-300 shadow-xl"
                        style={{
                          backgroundColor: member.colorTheme.primary,
                          boxShadow: `0 0 35px ${member.colorTheme.bgGlow}`
                        }}
                      >
                        {member.name.slice(0, 2).toUpperCase()}
                      </div>
                      
                      <div className="mt-5 text-center">
                        <div className="text-2xl font-black uppercase text-white tracking-wider">
                          {member.nickname}
                        </div>
                        <div className="text-xs text-neutral-400 mt-1 font-mono">
                          {member.role.split('&')[0]}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Card Action / Deploy Indicator */}
                    <div className="z-10 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                      {isCenter ? (
                        <div className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-neutral-500 transition text-xs font-mono font-bold text-white group">
                          <span>CLICK CARD TO DEPLOY PROFILE</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      ) : (
                        <div className="w-full text-center text-[11px] font-mono text-neutral-500">
                          CLICK TO INSPECT
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Navigation Arrows Below Carousel */}
            <div className="flex items-center gap-4 mt-8 z-20">
              <button 
                onClick={handlePrev}
                className="p-3 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition text-neutral-300 hover:text-white"
                aria-label="Previous Member"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-1.5">
                {members.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-neutral-800 hover:bg-neutral-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="p-3 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition text-neutral-300 hover:text-white"
                aria-label="Next Member"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* FLOATING TEXT: OUTSIDE RIGHT */}
          <div className="lg:col-span-3 order-3 flex flex-col justify-center space-y-4 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMember.slug + '-right'}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* Character Stat Radar / Bars */}
                <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-5 backdrop-blur-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase">
                    <Flame size={14} style={{ color: currentMember.colorTheme.accent }} />
                    POWER ATTRIBUTES
                  </div>

                  <div className="space-y-2.5 pt-1">
                    {[
                      { label: 'Coding', val: currentMember.stats.coding, icon: Code2 },
                      { label: 'Gaming', val: currentMember.stats.gaming, icon: Gamepad2 },
                      { label: 'Touring', val: currentMember.stats.touring, icon: Bike },
                      { label: 'Sigma', val: currentMember.stats.sigma, icon: Sparkles },
                    ].map((stat) => (
                      <div key={stat.label} className="space-y-1">
                        <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                          <span className="flex items-center gap-1.5"><stat.icon size={11} /> {stat.label}</span>
                          <span className="font-bold text-white">{stat.val}%</span>
                        </div>
                        <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${stat.val}%`,
                              backgroundColor: currentMember.colorTheme.primary 
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialties Badges */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    SPECIALIZATIONS & LOADOUT
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                    {currentMember.specialties.map((item, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-neutral-800 bg-neutral-900/90 text-neutral-300"
                      >
                        ⚡ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </main>

      {/* Footer Status Bar */}
      <footer className="relative z-20 px-6 py-3 border-t border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
          <span>ROSTER STATUS: ALL 12 SLOTS READY</span>
        </div>
        <div>
          USE <span className="text-neutral-300">LEFT/RIGHT ARROWS</span> OR CLICK CARD TO NAVIGATE
        </div>
      </footer>
    </div>
  );
}
