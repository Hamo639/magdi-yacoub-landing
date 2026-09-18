import { achievements } from "@/data/site-data";
import { Reveal } from "../animation/Reveal";

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 bg-muted/40 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold text-primary">
              إنجازات ومحطات بارزة
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              مسيرة تركت أثرًا في
              <span className="block text-primary">
                طب وجراحة القلب
              </span>
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              عقود من العمل في الجراحة والبحث العلمي والتعليم أسهمت في تطوير
              رعاية مرضى القلب حول العالم.
            </p>
          </div>
        </Reveal>

        {/* Achievements */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <Reveal
                key={achievement.title}
                delay={index * 0.1}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className="mb-8 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    {achievement.value}
                  </p>

                  <h3 className="mt-2 font-semibold">
                    {achievement.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {achievement.description}
                  </p>

                  <div
                    aria-hidden="true"
                    className="absolute -bottom-12 -left-12 size-32 rounded-full bg-primary/5 blur-2xl transition-transform duration-300 group-hover:scale-150"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}