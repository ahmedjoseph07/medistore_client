import { Button } from "@/components/ui/button";
import { ArrowRight, Clock3, Pill, ShieldCheck, Stethoscope } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: ShieldCheck,
    label: "Verified medicine only",
  },
  {
    icon: Clock3,
    label: "Fast city delivery",
  },
  {
    icon: Stethoscope,
    label: "Pharmacist support",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-green-50 via-background to-emerald-100/60 px-6 py-12 shadow-sm md:px-10 md:py-16">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.16),transparent_55%)] lg:block" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-background/80 px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
            <Pill className="size-4" />
            Trusted online pharmacy for everyday care
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Order genuine medicines and health essentials without leaving home
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Browse trusted products, upload prescriptions, and get essential care
              delivered with speed, safety, and transparent pricing.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="px-6">
              <Link href="/store">
                Browse Medicines
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-6">
              <Link href="/sign-in">Upload Prescription</Link>
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border bg-background/80 px-4 py-4 shadow-sm"
                >
                  <div className="rounded-xl bg-green-100 p-2 text-green-700">
                    <Icon className="size-4" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[1.75rem] border bg-background/90 p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">Today&apos;s care snapshot</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl bg-muted/60 p-4">
                <p className="text-3xl font-bold text-green-700">10k+</p>
                <p className="mt-1 text-sm text-muted-foreground">orders fulfilled safely</p>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4">
                <p className="text-3xl font-bold text-green-700">24/7</p>
                <p className="mt-1 text-sm text-muted-foreground">access to essentials</p>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4">
                <p className="text-3xl font-bold text-green-700">100%</p>
                <p className="mt-1 text-sm text-muted-foreground">authentic product sourcing</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-green-200 bg-green-600 p-6 text-white shadow-sm">
            <p className="text-sm font-medium text-green-50/90">Need prescription medicine?</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Share your prescription and let the team prepare your order.
            </h2>
            <p className="mt-3 text-sm leading-6 text-green-50/90">
              A clean prescription upload flow can sit here once your registry block is
              added.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
