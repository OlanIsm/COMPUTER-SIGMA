import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMemberBySlug, getAllMemberConfigs } from '@/member-zones/registry';
import { ChevronLeft, Shield, Users } from 'lucide-react';
import type { Metadata } from 'next';

interface MemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const members = getAllMemberConfigs();
  return members.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: MemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getMemberBySlug(slug);

  if (!item) {
    return {
      title: 'Member Not Found | COMPUTER SIGMA',
    };
  }

  return {
    title: `${item.config.name} (${item.config.nickname}) | COMPUTER SIGMA`,
    description: item.config.quote,
  };
}

export default async function SubMemberPage({ params }: MemberPageProps) {
  const { slug } = await params;
  const item = getMemberBySlug(slug);

  if (!item) {
    notFound();
  }

  const { config, Component } = item;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Universal Floating Navigation Header */}
      <nav className="sticky top-0 z-50 px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md flex items-center justify-between">
        <Link 
          href="/members"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition text-xs font-mono text-neutral-300 hover:text-white"
        >
          <ChevronLeft size={16} />
          <span>ROSTER SELECTOR</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-400 hidden sm:flex items-center gap-1.5">
            <Shield size={14} style={{ color: config.colorTheme.accent }} />
            COMPUTER SIGMA // {config.nickname.toUpperCase()}
          </span>
          <Link
            href="/members"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition text-xs font-mono text-neutral-400 hover:text-neutral-200"
          >
            <Users size={14} />
            <span>ALL MEMBERS</span>
          </Link>
        </div>
      </nav>

      {/* Render the Isolated Member View */}
      <main className="flex-1">
        <Component />
      </main>
    </div>
  );
}
