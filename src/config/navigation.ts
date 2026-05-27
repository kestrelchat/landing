export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "Roadmap",
    href: "https://go.kestrel.chat/roadmap",
    external: true,
  },
  {
    label: "Community",
    href: "https://go.kestrel.chat/discord",
    external: true,
  },
];
