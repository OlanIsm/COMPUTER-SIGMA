'use client';

import React from 'react';
import { config } from './config';
import { Code2, Gamepad2, Bike, Flame, Sparkles, Globe, ExternalLink } from 'lucide-react';

/**
 * ----------------------------------------------------------------------------------
 * HALAMAN KHUSUS: OSLAND (@osland)
 * ----------------------------------------------------------------------------------
 * Bro Osland! File ini 100% milik lu.
 * Lu bebas ubah layout, masukin animasi, mini game, Spotify playlist, atau portofolio lu.
 * Pastikan lu kerja di branch: feat/member-osland
 * ----------------------------------------------------------------------------------
 */
export default function MemberView() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{ backgroundColor: config.colorTheme.primary }}
      />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        {/* Header Profile Section */}
        <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Avatar / Character Display */}
            <div 
              className="w-28 h-28 rounded-2xl flex items-center justify-center text-4xl font-black shadow-lg ring-2 transition-transform hover:scale-105"
              style={{ 
                backgroundColor: config.colorTheme.primary,
                boxShadow: `0 0 25px ${config.colorTheme.bgGlow}`
              }}
            >
              {config.name.slice(0, 2).toUpperCase()}
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-xs uppercase font-mono px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                  COMPUTER SIGMA // ROSTER
                </span>
                <span 
                  className="text-xs uppercase font-mono px-2.5 py-0.5 rounded-full font-bold"
                  style={{ color: config.colorTheme.accent, backgroundColor: config.colorTheme.bgGlow }}
                >
                  SLOT ACTIVE
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {config.name}
              </h1>
              <p className="text-neutral-400 font-medium">
                {config.role}
              </p>
              <p className="text-neutral-300 italic text-sm pt-1">
                {config.quote}
              </p>
            </div>

            {/* Social / External Links */}
            <div className="flex sm:flex-col gap-3">
              {config.socials?.github && (
                <a href={config.socials.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition text-neutral-300 hover:text-white flex items-center gap-1.5 text-xs font-mono">
                  <Globe size={16} />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              )}
              {config.socials?.instagram && (
                <a href={config.socials.instagram} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition text-neutral-300 hover:text-white flex items-center gap-1.5 text-xs font-mono">
                  <ExternalLink size={16} />
                  <span className="hidden sm:inline">Social</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Stats Radar & Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Character Stats */}
          <div className="bg-neutral-900/60 border border-neutral-800/90 rounded-2xl p-6 backdrop-blur-sm space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-white">
              <Flame size={20} style={{ color: config.colorTheme.accent }} />
              Character Attributes
            </h3>
            <div className="space-y-3 pt-2">
              {[
                { label: 'Coding Power', val: config.stats.coding, icon: Code2 },
                { label: 'Gaming Reflex', val: config.stats.gaming, icon: Gamepad2 },
                { label: 'Touring Stamina', val: config.stats.touring, icon: Bike },
                { label: 'Sigma Energy', val: config.stats.sigma, icon: Sparkles },
              ].map((s) => (
                <div key={s.label} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5"><s.icon size={13} /> {s.label}</span>
                    <span className="font-bold text-white">{s.val}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-700"
                      style={{ 
                        width: `${s.val}%`,
                        backgroundColor: config.colorTheme.primary 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties / Tags */}
          <div className="bg-neutral-900/60 border border-neutral-800/90 rounded-2xl p-6 backdrop-blur-sm space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles size={20} style={{ color: config.colorTheme.accent }} />
              Specialties & Roles
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {config.specialties.map((item, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium border border-neutral-700/80 bg-neutral-800/60 text-neutral-200"
                >
                  ⚡ {item}
                </span>
              ))}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed pt-2">
              Bagian dari COMPUTER SIGMA (BINUS CS). Menjelang kelulusan 1 tahun lagi, fokus mengukir kenangan dan karya terbaik bareng circle.
            </p>
          </div>
        </div>

        {/* Member Custom Sandbox Area */}
        <div className="border border-dashed border-neutral-700/80 rounded-2xl p-8 bg-neutral-900/30 text-center space-y-4">
          <div className="inline-block p-3 rounded-full bg-neutral-800 text-neutral-300">
            <Sparkles size={24} />
          </div>
          <h2 className="text-xl font-bold text-white">
            Sandbox Area Milik {config.name}
          </h2>
          <p className="text-sm text-neutral-400 max-w-lg mx-auto">
            Bro {config.name}, area ini bisa lu isi apa aja sesuka hati lu! Pasang galeri foto touring lu, Spotify playlist favorit, showcase mini project, atau interaktif Canvas/WebGL.
          </p>
          <div className="text-xs font-mono text-neutral-400 bg-neutral-900 px-4 py-2 rounded-lg inline-block border border-neutral-800">
            Edit: <span className="text-amber-400">src/member-zones/{config.slug}/MemberView.tsx</span>
          </div>
        </div>
      </div>
    </div>
  );
}
