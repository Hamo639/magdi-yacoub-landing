"use client";

import { navLinks } from "@/data/site-data";
import Link from "next/link";
import { useEffect, useState } from "react";

export function NavLinks() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => {
        const isActive = activeSection === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative rounded-lg px-2.5 py-2 text-lg font-bold transition-all duration-300 ${
              isActive
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            {link.label}

            <span
              className={`absolute inset-x-0 -bottom-1 h-0.5 origin-right rounded-full bg-primary transition-transform duration-300 ${
                isActive ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
