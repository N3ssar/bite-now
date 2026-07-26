"use client";

import { usePathname } from "next/navigation";
import { Pages, Routes } from "@/constants/enums";
import { cn } from "@/lib/utils";
import Link from "../Link";

type NavbarProps = {
  isOpen?: boolean;
  onNavigate?: () => void;
};

export default function Navbar({ isOpen = true, onNavigate }: NavbarProps) {
  const pathname = usePathname();

  const navLinks = [
    {
      id: 0,
      title: "Home",
      href: `/${Routes.ROOT}`
    },
    {
      id: 1,
      title: "Menu",
      href: `/${Routes.MENU}`
    },
    {
      id: 2,
      title: "About",
      href: `/${Routes.ABOUT}`
    },
    {
      id: 3,
      title: "Contact",
      href: `/${Routes.CONTACT}`
    },
    {
      id: 4,
      title: "Login",
      href: `/${Routes.AUTH}/${Pages.LOGIN}`,
      primary: true
    }
  ];

  return (
    <nav
      className={cn(
        "flex flex-col gap-3 md:flex-row md:items-center md:gap-6",
        !isOpen && "hidden md:flex"
      )}
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-full text-[18px] font-semibold transition-all duration-300",
              link.primary
                ? "border-2 border-primary bg-primary px-6 py-2 text-white hover:bg-transparent hover:text-primary"
                : "text-accent hover:text-primary",
              isActive && !link.primary && "text-primary",
              isActive && link.primary && "bg-transparent text-primary"
            )}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}
