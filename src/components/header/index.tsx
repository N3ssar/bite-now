"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />

        <div className="hidden md:block">
          <Navbar />
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                className="rounded-full"
                aria-label="Open navigation menu"
              >
              <Menu />
              </Button>
            }
          />
          <SheetContent
            side="right"
            className="w-full max-w-xs border-l bg-background p-0"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-border/60 px-4 py-4">
                <Logo />
              </div>
              <div className="flex-1 px-4 py-6">
                <Navbar isOpen onNavigate={() => setIsOpen(false)} />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
