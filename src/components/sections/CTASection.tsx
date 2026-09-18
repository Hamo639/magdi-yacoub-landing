import Link from "next/link";
import { ArrowLeft, HeartPulse } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-10 lg:px-16 lg:py-20">
        
        {/* Decorative shapes */}
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-24 right-10 size-72 rounded-full bg-white/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-white/10">
            <HeartPulse className="size-7" />
          </div>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            كن جزءًا من رسالة
            <span className="block">تمنح القلوب فرصة جديدة</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-primary-foreground/80">
            تعرف أكثر على مؤسسة مجدي يعقوب للقلب ورسالتها في تقديم الرعاية
            الطبية المتخصصة ودعم البحث العلمي وتدريب الأجيال القادمة.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="#foundation">
                تعرف على المؤسسة
                <ArrowLeft className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}