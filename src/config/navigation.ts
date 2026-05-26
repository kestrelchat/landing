export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "Roadmap",
    href: "https://github.com/orgs/kestrelchat/projects/6",
    external: true,
  },
  {
    label: "Community",
    href: "https://discord.gg/T8rAX8DmNS",
    external: true,
  },
];
