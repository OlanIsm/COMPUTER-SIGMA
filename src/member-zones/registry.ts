import dynamic from 'next/dynamic';
import React from 'react';
import { MemberConfig, MemberRegistryItem } from '@/types/member';

import { config as olanConfig } from './olan/config';
import { config as jadConfig } from './jad/config';
import { config as faizConfig } from './faiz/config';
import { config as isaacConfig } from './isaac/config';
import { config as ahmadConfig } from './ahmad/config';
import { config as fransConfig } from './frans/config';
import { config as regoConfig } from './rego/config';
import { config as oslandConfig } from './osland/config';
import { config as zakiConfig } from './zaki/config';
import { config as nauvalConfig } from './nauval/config';
import { config as adinConfig } from './adin/config';
import { config as member12Config } from './member12/config';

// Dynamic imports with ssr to allow each member complete isolation
const OlanView = dynamic(() => import('./olan/MemberView'));
const JadView = dynamic(() => import('./jad/MemberView'));
const FaizView = dynamic(() => import('./faiz/MemberView'));
const IsaacView = dynamic(() => import('./isaac/MemberView'));
const AhmadView = dynamic(() => import('./ahmad/MemberView'));
const FransView = dynamic(() => import('./frans/MemberView'));
const RegoView = dynamic(() => import('./rego/MemberView'));
const OslandView = dynamic(() => import('./osland/MemberView'));
const ZakiView = dynamic(() => import('./zaki/MemberView'));
const NauvalView = dynamic(() => import('./nauval/MemberView'));
const AdinView = dynamic(() => import('./adin/MemberView'));
const Member12View = dynamic(() => import('./member12/MemberView'));

export const MEMBERS_REGISTRY: Record<string, MemberRegistryItem> = {
  olan: { config: olanConfig, Component: OlanView },
  jad: { config: jadConfig, Component: JadView },
  faiz: { config: faizConfig, Component: FaizView },
  isaac: { config: isaacConfig, Component: IsaacView },
  ahmad: { config: ahmadConfig, Component: AhmadView },
  frans: { config: fransConfig, Component: FransView },
  rego: { config: regoConfig, Component: RegoView },
  osland: { config: oslandConfig, Component: OslandView },
  zaki: { config: zakiConfig, Component: ZakiView },
  nauval: { config: nauvalConfig, Component: NauvalView },
  adin: { config: adinConfig, Component: AdinView },
  member12: { config: member12Config, Component: Member12View },
};

export const MEMBER_SLUGS = Object.keys(MEMBERS_REGISTRY);

export function getAllMemberConfigs(): MemberConfig[] {
  return Object.values(MEMBERS_REGISTRY).map((item) => item.config);
}

export function getMemberBySlug(slug: string): MemberRegistryItem | undefined {
  return MEMBERS_REGISTRY[slug.toLowerCase()];
}
