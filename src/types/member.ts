export interface MemberConfig {
  slug: string;
  name: string;
  nickname: string;
  role: string;
  avatarUrl?: string;
  quote: string;
  colorTheme: {
    primary: string; // e.g. '#6366f1' or hex / tailwind color
    accent: string;  // e.g. '#a855f7'
    bgGlow: string;  // e.g. 'rgba(99, 102, 241, 0.3)'
  };
  stats: {
    coding: number;    // 0 - 100
    gaming: number;    // 0 - 100
    touring: number;   // 0 - 100
    sigma: number;     // 0 - 100
  };
  specialties: string[]; // e.g. ['Frontend', 'Valorant Duelist', 'Night Ride']
  socials?: {
    github?: string;
    instagram?: string;
    linkedin?: string;
    spotify?: string;
  };
}

export interface MemberRegistryItem {
  config: MemberConfig;
  Component: React.ComponentType;
}
