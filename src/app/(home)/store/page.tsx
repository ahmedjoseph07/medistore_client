import { Button } from "@/components/ui/button";
import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { ArrowRight, MapPin, Pill, ShieldCheck, Store } from "lucide-react";
import Link from "next/link";

const storeHighlights = [
  {
    title: "Wide product range",
    description: "Browse prescription, OTC, wellness, and daily care products in one flow.",
    icon: Pill,
  },
  {
    title: "Verified supply",
    description: "Store positioning should reinforce authenticity and careful sourcing.",
    icon: ShieldCheck,
  },
  {
    title: "Nearby access",
    description: "Pair online ordering with store presence for trust and convenience.",
    icon: MapPin,
  },
];

export default async function StorePage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="Store"
        title="A cleaner storefront for pharmacy shopping"
        description="The store page should help customers discover products fast while still signaling trust, legitimacy, and healthcare seriousness. This version acts as a designed storefront shell."
        stats={[
          { label: "featured care categories", value: "6" },
          { label: "access to essential items", value: "24/7" },
          { label: "focus on authentic sourcing", value: "100%" },
        ]}
      />

      <InfoCardGrid items={storeHighlights} />

      <section className="rounded-[1.75rem] border bg-background p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-700">
              Store actions
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Continue shopping by category or from the homepage
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline">
              <Link href="/categories">View Categories</Link>
            </Button>
            <Button asChild>
              <Link href="/">
                Back to Home
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] bg-muted/50 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-green-100 p-3 text-green-700">
              <Store className="size-5" />
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Once you connect real product data, this page can evolve into category filters,
              product cards, availability, and prescription-aware checkout paths.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
