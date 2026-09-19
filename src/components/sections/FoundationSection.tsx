import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HeartPulse } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "../animation/Reveal";
import { Palse } from "../animation/Palse";

export function FoundationSection() {
  return (
    <section
      id="foundation"
      className="scroll-mt-24 bg-muted/40 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* الصورة */}
          <Reveal direction="right" >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/10 blur-3xl"
            />

            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border bg-muted shadow-xl">
              <Image
                src="/images/Foundation.jpg"
                alt="مؤسسة مجدي يعقوب للقلب"
                fill
                sizes="(max-width: 800px) 80vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 right-6">
                <Palse>
                <div className="flex size-12 items-center justify-center rounded-2xl  text-red-500 shadow-2xl">
                  <HeartPulse className="size-6" />
                </div>
                </Palse>
              </div>
            </div>
          </div>
</Reveal>
          {/* المحتوى */}
          <Reveal direction="left" >
          <div className="mr-3">
            <p className="mb-4 text-sm font-semibold text-primary">
              مؤسسة مجدي يعقوب للقلب
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              حين يتحول العلم إلى
              <span className="block text-primary">
                رسالة لإنقاذ القلوب
              </span>
            </h2>

            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              تواصل مؤسسة مجدي يعقوب للقلب رسالتها في تقديم الرعاية القلبية
              المتخصصة، إلى جانب دعم البحث العلمي وتدريب الكوادر الطبية
              المتخصصة في أمراض وجراحات القلب.
            </p>

           
          </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}