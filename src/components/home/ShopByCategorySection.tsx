import { Baby, HeartPulse, Pill, ScanSearch, Sparkles, Syringe } from "lucide-react";

const categories = [
  {
    name: "Prescription",
    description: "Upload a doctor-issued prescription and order regulated medicine.",
    icon: ScanSearch,
  },
  {
    name: "OTC Relief",
    description: "Everyday cold, fever, pain, and digestive care essentials.",
    icon: Pill,
  },
  {
    name: "Vitamins",
    description: "Daily supplements to support immunity, bones, and energy.",
    icon: Sparkles,
  },
  {
    name: "Diabetes Care",
    description: "Monitoring tools and routine support products in one place.",
    icon: Syringe,
  },
  {
    name: "Baby Care",
    description: "Gentle essentials for newborn hygiene, feeding, and wellness.",
    icon: Baby,
  },
  {
    name: "Personal Care",
    description: "Skin, oral, and hygiene products curated for daily use.",
    icon: HeartPulse,
  },
];

export default function ShopByCategorySection() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-700">
            Categories
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Shop by care need</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
          I shifted this from plain text cards to icon-led category tiles so the section is
          easier to scan and feels closer to a modern marketplace block.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <article
              key={category.name}
              className="group rounded-[1.5rem] border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl bg-green-100 p-3 text-green-700">
                  <Icon className="size-5" />
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  Popular
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {category.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
