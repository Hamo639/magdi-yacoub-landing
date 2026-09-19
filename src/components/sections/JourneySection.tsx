import { journey } from "@/data/site-data";
import { Reveal } from "../animation/Reveal";
import { ScrollProgressLine } from "../animation/ScrollProgressLine";


export function JourneySection() {
  return (
    <section
      id="journey"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* العنوان */}
        <Reveal direction="left">
        <div className="max-w-2xl mr-3">
          <p className="mb-4 text-sm font-semibold text-primary">
            رحلة عبر الزمن
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            محطات صنعت
            <span className="block text-primary">
              مسيرة استثنائية
            </span>
          </h2>

          <p className="mt-6 leading-8 text-muted-foreground">
            من مصر إلى عدد من أبرز مراكز جراحة القلب، امتدت مسيرة السير مجدي
            يعقوب لعقود من الطب والبحث والتعليم والعمل الإنساني.
          </p>
        </div>
</Reveal>
        {/* Timeline */}
        <div className="mt-16 mr-3">
  <ScrollProgressLine>
    <div className="space-y-12">
      {journey.map((item, index) => {
        const Icon = item.icon;

        return (
          <article
            key={item.year}
            className="relative grid md:grid-cols-2 md:gap-16"
          >
            {/* النقطة الموجودة على الخط */}
            <div className="absolute right-0 top-0 z-10 flex size-10 items-center justify-center rounded-full border bg-background text-primary md:right-1/2 md:translate-x-1/2">
              <Icon className="size-4" />
            </div>

            {/* المحتوى */}
            <div
              className={`mr-16 md:mr-0  ${
                index % 2 === 0
                  ? "md:col-start-1 md:pl-16"
                  : "md:col-start-2 md:pr-16"
              }`}
            >
              <Reveal
                direction={index % 2 === 0 ? "right" : "left"}
                delay={index * 0.08}
              >
                <div className="rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-sm font-bold text-primary">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[16px] font-bold text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            </div>
          </article>
        );
      })}
    </div>
  </ScrollProgressLine>
</div>
      </div>
    </section>
  );
}