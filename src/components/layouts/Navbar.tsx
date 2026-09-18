import Link from "next/link";
import { ArrowLeft, HeartPulse, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ThemeToggle } from "./ThemeToogle";
import { NavLinks } from "./NavLinks";
import { navLinks } from "@/data/site-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-2 pt-2 sm:px-6 sm:pt-3">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-xl border border-border/60 bg-background/90 px-3 shadow-sm backdrop-blur-xl sm:h-16 sm:rounded-2xl sm:px-5">
        
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 sm:gap-3"
          aria-label="الصفحة الرئيسية"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105 sm:size-10 sm:rounded-xl">
            <HeartPulse className="size-4 sm:size-5" />
          </span>

          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight sm:text-base">
              مجدي يعقوب
            </p>

            <p className="mt-0.5 hidden text-[11px] text-muted-foreground sm:block">
              جراح القلب والإنسانية
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavLinks />

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1">
          <ThemeToggle />

          <Button
            size="sm"
            className="hidden rounded-xl lg:inline-flex"
            asChild
          >
            <Link href="#foundation">
              مؤسسة مجدي يعقوب
            </Link>
          </Button>

          {/* Mobile Navigation */}
       <Sheet>
  <SheetTrigger asChild>
    <Button
      variant="ghost"
      size="icon"
      className="rounded-xl md:hidden"
      aria-label="فتح القائمة"
    >
      <Menu className="size-5" />
    </Button>
  </SheetTrigger>

  <SheetContent
    side="right"
    className="flex w-[88%] max-w-sm flex-col border-l bg-background p-6 pt-16"
  >
    {/* Brand */}
    <div className="mb-10 flex items-center gap-3">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
        <HeartPulse className="size-5" />
      </span>

      <div>
        <p className="font-bold">
          مجدي يعقوب
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          جراح القلب والإنسانية
        </p>
      </div>
    </div>

    {/* Navigation */}
    <nav className="flex flex-col gap-2">
      {navLinks.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex items-center justify-between rounded-2xl px-4 py-4 text-base font-medium transition-colors hover:bg-muted"
        >
          <span>{link.label}</span>

          <span className="text-xs text-muted-foreground transition-transform group-hover:-translate-x-1">
            0{index + 1}
          </span>
        </Link>
      ))}
    </nav>

    {/* Bottom */}
    <div className="mt-auto pt-8">
      <div className="mb-5 h-px bg-border" />

      <p className="mb-4 text-sm leading-6 text-muted-foreground">
        تعرف على أثر السير مجدي يعقوب في الطب والعمل الإنساني.
      </p>

      <Button
        size="lg"
        className="w-full rounded-2xl"
        asChild
      >
        <Link href="#foundation">
          تعرف على المؤسسة
          <ArrowLeft className="size-4" />
        </Link>
      </Button>
    </div>
  </SheetContent>
</Sheet>
        </div>
      </div>
    </header>
  );
}