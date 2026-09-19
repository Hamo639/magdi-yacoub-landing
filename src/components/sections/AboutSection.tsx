import { highlights } from "@/data/site-data";
import { Reveal } from "../animation/Reveal";



export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
<Reveal>
          {/* عنوان القسم */}
          <div className="mr-4">
            <p className="mb-4 text-sm font-semibold text-primary">
              عن السير مجدي يعقوب
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              مسيرة طبية يقودها
              <span className="block text-primary">
                العلم والإنسانية
              </span>
            </h2>
          </div>
</Reveal>
          {/* محتوى القسم */}
          <Reveal delay={0.18}>
          <div className="mr-3">
            <p className="text-lg font-bold leading-9 text-muted-foreground">
              السير مجدي يعقوب جرّاح قلب وعالم، جمع خلال مسيرته بين الريادة
              في جراحة القلب، والبحث العلمي، والتعليم، والعمل الإنساني،
              واضعًا إنقاذ حياة المرضى وتطوير طب القلب في صميم رسالته.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[14px] font-bold leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}