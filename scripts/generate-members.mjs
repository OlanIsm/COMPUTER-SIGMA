import fs from 'fs';
import path from 'path';

const members = [
  {
    slug: 'olan',
    name: 'Olan',
    nickname: 'Olan',
    role: 'Fullstack Alchemist & Game Strategist',
    quote: '"Ngoding sampe pagi, push dulu baru turu."',
    colorTheme: { primary: '#3b82f6', accent: '#60a5fa', bgGlow: 'rgba(59, 130, 246, 0.35)' },
    stats: { coding: 95, gaming: 90, touring: 85, sigma: 99 },
    specialties: ['Next.js', 'Valorant Duelist', 'Touring Leader', 'System Architecture']
  },
  {
    slug: 'jad',
    name: 'Jad',
    nickname: 'Jad',
    role: 'Cybersecurity Sentinel & Tactical Gamer',
    quote: '"Kalo aman ya aman, kalo jebol kita debug bareng."',
    colorTheme: { primary: '#10b981', accent: '#34d399', bgGlow: 'rgba(16, 185, 129, 0.35)' },
    stats: { coding: 92, gaming: 88, touring: 80, sigma: 94 },
    specialties: ['Network Security', 'Apex Legends', 'Touring Navigator', 'Reverse Eng']
  },
  {
    slug: 'faiz',
    name: 'Faiz',
    nickname: 'Faiz',
    role: 'Backend Architect & Speed Demon',
    quote: '"Low latency in code, fast response on the road."',
    colorTheme: { primary: '#f59e0b', accent: '#fbbf24', bgGlow: 'rgba(245, 158, 11, 0.35)' },
    stats: { coding: 94, gaming: 85, touring: 92, sigma: 96 },
    specialties: ['Distributed Systems', 'Genshin / HSR', 'Puncak Touring', 'PostgreSQL']
  },
  {
    slug: 'isaac',
    name: 'Isaac',
    nickname: 'Isaac',
    role: 'AI / ML Specialist & Carry Midlaner',
    quote: '"Train model 8 jam, rank up 2 jam."',
    colorTheme: { primary: '#8b5cf6', accent: '#a78bfa', bgGlow: 'rgba(139, 92, 246, 0.35)' },
    stats: { coding: 96, gaming: 93, touring: 75, sigma: 95 },
    specialties: ['PyTorch / LLMs', 'Dota 2 / MOBA', 'Algorithm God', 'Data Science']
  },
  {
    slug: 'ahmad',
    name: 'Ahmad',
    nickname: 'Ahmad',
    role: 'DevOps Warlock & Cornering Master',
    quote: '"CI/CD lancar, touring aman tanpa mogok."',
    colorTheme: { primary: '#ef4444', accent: '#f87171', bgGlow: 'rgba(239, 68, 68, 0.35)' },
    stats: { coding: 91, gaming: 86, touring: 96, sigma: 97 },
    specialties: ['Kubernetes / Docker', 'Racing Simulator', 'Night Ride', 'Cloud Infra']
  },
  {
    slug: 'frans',
    name: 'Frans',
    nickname: 'Frans',
    role: 'Creative UI/UX Visionary & Clutch Player',
    quote: '"Pixel perfect di UI, aim lock di in-game."',
    colorTheme: { primary: '#ec4899', accent: '#f472b6', bgGlow: 'rgba(236, 72, 153, 0.35)' },
    stats: { coding: 90, gaming: 94, touring: 88, sigma: 93 },
    specialties: ['Framer Motion / 3D', 'CS2 Sniper', 'Creative Direction', 'Tailwind']
  },
  {
    slug: 'rego',
    name: 'Rego',
    nickname: 'Rego',
    role: 'Mobile Specialist & Support Specialist',
    quote: '"Support terbaik di repo dan di party tourney."',
    colorTheme: { primary: '#06b6d4', accent: '#22d3ee', bgGlow: 'rgba(6, 182, 212, 0.35)' },
    stats: { coding: 93, gaming: 89, touring: 84, sigma: 92 },
    specialties: ['Flutter / Swift', 'Overwatch', 'Spotify Curator', 'API Integrations']
  },
  {
    slug: 'osland',
    name: 'Osland',
    nickname: 'Osland',
    role: 'Algorithmic Brain & Tournament Veteran',
    quote: '"Solusi O(1) buat problem apapun."',
    colorTheme: { primary: '#14b8a6', accent: '#2dd4bf', bgGlow: 'rgba(20, 184, 166, 0.35)' },
    stats: { coding: 97, gaming: 91, touring: 82, sigma: 95 },
    specialties: ['Competitive Prog', 'Strategy Games', 'Study Group Lead', 'C++ Mastery']
  },
  {
    slug: 'zaki',
    name: 'Zaki',
    nickname: 'Zaki',
    role: 'Hardware Hacker & Drift Enthusiast',
    quote: '"Custom PC build, custom motor bike, ready gas."',
    colorTheme: { primary: '#84cc16', accent: '#a3e635', bgGlow: 'rgba(132, 204, 22, 0.35)' },
    stats: { coding: 89, gaming: 92, touring: 95, sigma: 98 },
    specialties: ['IoT / Embedded', 'Forza / Racing', 'Road Captain', 'Mechanical Keyboards']
  },
  {
    slug: 'nauval',
    name: 'Nauval',
    nickname: 'Nauval',
    role: 'Product Mindset & Community Catalyst',
    quote: '"Satukan visi, solidkan circle sampai wisuda."',
    colorTheme: { primary: '#f97316', accent: '#fb923c', bgGlow: 'rgba(249, 115, 22, 0.35)' },
    stats: { coding: 91, gaming: 90, touring: 91, sigma: 96 },
    specialties: ['Project Management', 'Co-op RPGs', 'Event Organizer', 'Frontend Magic']
  },
  {
    slug: 'adin',
    name: 'Adin',
    nickname: 'Adin',
    role: 'Code Craftsman & Late Night Grinder',
    quote: '"Santai tapi pasti selesai sebelum deadline."',
    colorTheme: { primary: '#6366f1', accent: '#818cf8', bgGlow: 'rgba(99, 102, 241, 0.35)' },
    stats: { coding: 92, gaming: 95, touring: 87, sigma: 94 },
    specialties: ['React Ecosystem', 'FIFA / EAFC', 'Touring Spot Hunter', 'TypeScript']
  },
  {
    slug: 'member12',
    name: 'Member 12',
    nickname: 'The 12th Sigma',
    role: 'The Secret Weapon & Final Piece',
    quote: '"Lengkapi 12 formasi COMPUTER SIGMA."',
    colorTheme: { primary: '#e11d48', accent: '#fb7185', bgGlow: 'rgba(225, 29, 72, 0.35)' },
    stats: { coding: 95, gaming: 95, touring: 95, sigma: 100 },
    specialties: ['Specialist', 'Tournament Champ', 'Touring Rider', 'Compsig Legend']
  }
];

const baseDir = path.join(process.cwd(), 'src', 'member-zones');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

members.forEach((m) => {
  const memberDir = path.join(baseDir, m.slug);
  if (!fs.existsSync(memberDir)) {
    fs.mkdirSync(memberDir, { recursive: true });
  }

  // Write config.ts
  const configContent = `import { MemberConfig } from '@/types/member';

export const config: MemberConfig = {
  slug: '${m.slug}',
  name: '${m.name}',
  nickname: '${m.nickname}',
  role: '${m.role}',
  quote: ${JSON.stringify(m.quote)},
  colorTheme: {
    primary: '${m.colorTheme.primary}',
    accent: '${m.colorTheme.accent}',
    bgGlow: '${m.colorTheme.bgGlow}',
  },
  stats: {
    coding: ${m.stats.coding},
    gaming: ${m.stats.gaming},
    touring: ${m.stats.touring},
    sigma: ${m.stats.sigma},
  },
  specialties: ${JSON.stringify(m.specialties, null, 2)},
  socials: {
    github: 'https://github.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
};
`;
  fs.writeFileSync(path.join(memberDir, 'config.ts'), configContent, 'utf-8');

  // Write MemberView.tsx
  const memberViewContent = `'use client';

import React from 'react';
import { config } from './config';
import { Code2, Gamepad2, Bike, Flame, Sparkles, Globe, ExternalLink } from 'lucide-react';

/**
 * ----------------------------------------------------------------------------------
 * HALAMAN KHUSUS: ${m.name.toUpperCase()} (@${m.slug})
 * ----------------------------------------------------------------------------------
 * Bro ${m.name}! File ini 100% milik lu.
 * Lu bebas ubah layout, masukin animasi, mini game, Spotify playlist, atau portofolio lu.
 * Pastikan lu kerja di branch: feat/member-${m.slug}
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
                boxShadow: \`0 0 25px \${config.colorTheme.bgGlow}\`
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
                        width: \`\${s.val}%\`,
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
`;
  fs.writeFileSync(path.join(memberDir, 'MemberView.tsx'), memberViewContent, 'utf-8');

  // Write README.md for the member
  const readmeContent = `# Zone ${m.name} (@${m.slug})

Folder ini adalah ruang kerja privat untuk **${m.name}**.

## Cara Kerja (Biar Bebas Conflict)
1. Checkout ke branch lu:
   \`\`\`bash
   git checkout -b feat/member-${m.slug}
   \`\`\`
2. Edit file di folder ini:
   - \`config.ts\`: Ubah info profil, bio, stats, warna tema, atau link sosmed lu.
   - \`MemberView.tsx\`: Kreasikan desain layout halaman sub-member lu sesuka hati!
3. Commit & push branch lu:
   \`\`\`bash
   git add .
   git commit -m "feat(${m.slug}): customize sub-member page"
   git push origin feat/member-${m.slug}
   \`\`\`
4. Buat Pull Request (PR) ke branch \`dev\`!
`;
  fs.writeFileSync(path.join(memberDir, 'README.md'), readmeContent, 'utf-8');
});

console.log('Successfully regenerated all 12 member zones with clean icons!');
