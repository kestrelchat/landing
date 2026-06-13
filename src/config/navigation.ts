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
    label: "Discord",
    href: "https://go.kestrel.chat/discord",
    external: true,
  },
  {
    label: "Matrix",
    href: "https://go.kestrel.chat/matrix",
    external: true,
  },
];
