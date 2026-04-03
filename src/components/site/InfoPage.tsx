import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
}

interface GridItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  stats,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  stats?: StatItem[];
  className?: string;
}) {
  return (
    <section className={cn("section-shell", className)}>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-4">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="section-lead max-w-2xl md:text-lg">{description}</p>
        </div>

        {stats?.length ? (
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-card bg-background/85 p-5">
                <p className="text-3xl font-bold text-green-700">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function InfoCardGrid({
  items,
  columns = "three",
}: {
  items: GridItem[];
  columns?: "two" | "three" | "four";
}) {
  const gridClass =
    columns === "two"
      ? "md:grid-cols-2"
      : columns === "four"
        ? "md:grid-cols-2 xl:grid-cols-4"
        : "md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={cn("grid gap-4", gridClass)}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="surface-card transition-colors hover:border-green-200 hover:bg-green-50/40"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <Icon className="size-5" />
            </div>
            <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
