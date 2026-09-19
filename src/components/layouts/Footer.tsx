import Link from "next/link";
import { HeartPulse } from "lucide-react";
import { Palse } from "../animation/Palse";

const footerLinks = [
  { label: "عن مجدي يعقوب", href: "#about" },
  { label: "المسيرة", href: "#journey" },
  { label: "الإنجازات", href: "#achievements" },
  { label: "المؤسسة", href: "#foundation" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold"
          >
            <Palse>
            <span className="flex size-9 items-center justify-center rounded-xl  text-red-500">
              <HeartPulse className="size-5" />
            </span>
</Palse>
            <span>مجدي يعقوب</span>
          </Link>

          {/* Navigation */}
          <nav
            aria-label="روابط تذييل الصفحة"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-md font-bold text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} مجدي يعقوب
          </p>
        </div>
      </div>
    </footer>
  );
}