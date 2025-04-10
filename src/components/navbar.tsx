import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import {
  DiscordIcon,
  GithubIcon,
  HeartFilledIcon,
  SearchIcon,
  TwitterIcon,
} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

// Definisikan item navigasi untuk kategori produk
const productCategories = [
  { label: "Home", href: "#home" },
  { label: "Produk", href: "#produk" },
  { label: "Rokok", href: "#rokok" },
  { label: "Dupa", href: "#dupa" },
  { label: "Sembako", href: "#sembako" },
];

export const Navbar = () => {
  // Fungsi untuk smooth scroll ke elemen dengan ID tertentu
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            {/* <Logo /> */}
            <Image src="/assets/image/logoga.png" width={50} />
            <p className="font-bold text-inherit">Gemilang Abadi</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {/* Menampilkan kategori produk di navbar */}
          {productCategories.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer",
                )}
                color="foreground"
                onClick={() => scrollToSection(item.href.substring(1))}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* Menampilkan kategori produk di menu mobile */}
          {productCategories.map((item, index) => (
            <NavbarMenuItem key={`category-${index}`}>
              <Link
                className="w-full cursor-pointer"
                color="foreground"
                size="lg"
                onClick={() => {
                  scrollToSection(item.href.substring(1));
                  // Tutup menu setelah klik (jika ada fungsi untuk menutup menu)
                }}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          {/* Menampilkan item navigasi lainnya dari siteConfig */}
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
