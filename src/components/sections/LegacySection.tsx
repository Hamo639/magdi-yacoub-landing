import { Heart } from "lucide-react";
import { FloatingGlow } from "../animation/FloatingGlow";

export function LegacySection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <FloatingGlow
      delay={0.2}
        className="absolute left-1/2 top-1/2 -z-10 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Heart className="size-6" />
        </div>

        <p className="mb-4 text-sm font-semibold text-primary">
          إرث يتجاوز حدود الطب
        </p>

        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          حين يجتمع العلم بالإنسانية،
          <span className="block text-primary">
            يصبح إنقاذ الحياة رسالة.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-muted-foreground">
          مسيرة امتدت لعقود من الجراحة والبحث والتعليم والعمل الإنساني،
          لتترك أثرًا يتجاوز غرف العمليات إلى أجيال جديدة من الأطباء
          والباحثين ومرضى القلب.
        </p>
      </div>
    </section>
  );
}