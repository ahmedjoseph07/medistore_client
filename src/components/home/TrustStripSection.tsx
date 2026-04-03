import { BadgeCheck, CreditCard, ShieldPlus, Truck } from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "Licensed pharmacists",
    description: "Reviewed support for prescription and non-prescription orders.",
  },
  {
    icon: ShieldPlus,
    title: "Authentic medicine",
    description: "Sourced from verified suppliers with transparent handling.",
  },
  {
    icon: Truck,
    title: "Fast delivery",
    description: "Built for quick fulfillment across high-demand daily needs.",
  },
  {
    icon: CreditCard,
    title: "Secure payment",
    description: "Smooth checkout with trusted and protected payment flow.",
  },
];

export default function TrustStripSection() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-700">
            Why patients trust MediStore
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Built for reliability, not just convenience
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
          This section works better as a compact trust grid than a plain strip because it
          gives each promise enough context to feel credible.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-[1.5rem] border bg-background p-5 shadow-sm transition-colors hover:border-green-200 hover:bg-green-50/40"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
