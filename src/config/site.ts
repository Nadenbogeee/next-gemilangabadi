export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Gemilang Abadi",
  description: "Toko Sembako Tedekar, Gemilang Abadi",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Produk",
      href: "/docs",
    },
    {
      label: "Rokok",
      href: "/pricing",
    },
    {
      label: "Dupa",
      href: "/blog",
    },
    {
      label: "Sembako",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
