export interface NavigationItem {
  name: string;
  path: string;
  subItems?: {
    name: string;
    path: string;
  }[];
}

export interface Event {
  date: string;
  title: string;
  time: string;
}

export interface Ministry {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export interface Leader {
  name: string;
  role: string;
  years: string;
  image?: string;
}

export interface StatItem {
  number: string;
  label: string;
  desc: string;
}

export interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface ResourceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface ServiceFlow {
  time: string;
  activity: string;
  description: string;
}