'use client';

import Link from 'next/link';
import { Shield, Users, ArrowRight, Sparkles, Terminal, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-neutral-100 flex flex-col justify-between relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <header className="px-6 py-6 border-b border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Shield className="text-blue-500" size={20} />
          <span className="font-mono font-bold tracking-widest text-sm text-white">
            COMPUTER SIGMA
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800">
            BINUS CS // 12 MEMBERS
          </span>
        </div>
      </header>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 relative z-10 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <Sparkles size={14} />
            <span>FINAL YEAR MEMORY CAPSULE & PORTFOLIO</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white uppercase">
            COMPUTER <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">SIGMA</span>
          </h1>

          <p className="text-neutral-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            12 Mahasiswa Computer Science BINUS. Satu tahun menuju wisuda, mengabadikan setiap journey dari study group, touring, gaming, hingga company visit.
          </p>
        </motion.div>

        {/* CTA to Member Selector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/members"
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono font-bold text-sm shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5 group"
          >
            <Users size={18} />
            <span>ENTER GAME ROSTER SELECTOR</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Key Highlights Pill */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 w-full max-w-2xl text-xs font-mono text-neutral-400">
          <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
            📚 Study Groups
          </div>
          <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
            🏍️ Touring & Rides
          </div>
          <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
            🎮 Game Tournaments
          </div>
          <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
            🏢 Company Visits
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-4 border-t border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md flex items-center justify-between text-xs font-mono text-neutral-500 relative z-10">
        <div className="flex items-center gap-1.5">
          <Terminal size={14} className="text-blue-500" />
          <span>EST. BINUS UNIVERSITY</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Crafted with</span>
          <Heart size={12} className="text-red-500 fill-red-500" />
          <span>by Computer Sigma</span>
        </div>
      </footer>
    </div>
  );
}
