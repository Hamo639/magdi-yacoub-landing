import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HeartPulse } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "../animation/Reveal";
import { FloatingGlow } from "../animation/FloatingGlow";
import { Palse } from "../animation/Palse";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glows */}
      <FloatingGlow className=" absolute -top-10 right-0 size-72 rounded-full bg-primary/20 blur-3xl sm:size-96" />

      

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:py-16 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        
        {/* Content */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-right">
          
          {/* Badge */}
          <Reveal delay={0.05}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-2 text-xs font-medium text-muted-foreground backdrop-blur sm:mb-6 sm:px-4 sm:text-sm">

            <Palse>
              <HeartPulse className="size-3.5 shrink-0 text-destructive sm:size-4" />
              </Palse>
              <span>جرّاح قلب • عالم • رائد في العمل الإنساني</span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.15}>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              حياة كرسها
              <span className="block text-primary">
                من أجل كل قلب
              </span>
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.25}>
            <p className="mx-auto mt-5 max-w-xl text-sm font-bold leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              اكتشف المسيرة الاستثنائية للسير مجدي يعقوب، أحد أبرز رواد جراحة
              القلب، والذي امتد أثره من الابتكار الطبي والبحث العلمي إلى العمل
              الإنساني ورعاية مرضى القلب.
            </p>
          </Reveal>

          {/* Buttons */}
          <Reveal delay={0.35}>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="#journey">
                  اكتشف مسيرته
                  <ArrowLeft className="size-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="#foundation">
                  مؤسسة مجدي يعقوب
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal
          direction="left"
          delay={0.2}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:mr-auto lg:max-w-lg"
        >
          <FloatingGlow
            delay={0.8}
            className="absolute inset-6 -z-10 rounded-[3rem] bg-primary/20 blur-2xl"
          />

          <div className="group relative aspect-4/5 overflow-hidden rounded-2xl border bg-muted shadow-xl shadow-primary/10 sm:rounded-[2rem] sm:shadow-2xl">
            <Image
              src="/images/magdi.png"
              alt="السير مجدي يعقوب"
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/20 to-transparent p-4 pt-20 text-right text-white sm:p-6 sm:pt-24">
              <p className="text-base font-semibold sm:text-lg">
                السير مجدي يعقوب
              </p>

              <p className="mt-1 text-xs text-white/75 sm:text-sm">
                جرّاح قلب وعالم
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}