export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  image?: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
}

export interface HomeData {
  navLinks: NavLink[];
  hero: {
    title: string;
    subtitle: string;
  };
  solutions: {
    title: string;
    items: Solution[];
  };
  pillars: {
    title: string;
    subtitle: string;
    items: Pillar[];
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}
