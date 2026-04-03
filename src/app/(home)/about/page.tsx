import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { Clock3, PackageCheck, ShieldPlus, Stethoscope } from "lucide-react";

const pillars = [
  {
    title: "Authentic sourcing",
    description: "We focus on verified suppliers and transparent medicine handling standards.",
    icon: ShieldPlus,
  },
  {
    title: "Fast fulfillment",
    description: "Core product flow is designed to reduce time between order and delivery.",
    icon: Clock3,
  },
  {
    title: "Professional support",
    description: "Prescription-related care should feel guided, not confusing or risky.",
    icon: Stethoscope,
  },
  {
    title: "Reliable operations",
    description: "Inventory, packaging, and communication should hold up under repeat demand.",
    icon: PackageCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="About us"
        title="MediStore is built to make online pharmacy feel dependable"
        description="The goal is not just to sell medicine online. It is to create a clear, trustworthy care-commerce experience where customers can access essentials, upload prescriptions, and feel confident about what arrives at their door."
        stats={[
          { label: "core care categories", value: "6+" },
          { label: "customer-first purchase flow", value: "24/7" },
          { label: "focus on authentic supply", value: "100%" },
        ]}
      />

      <InfoCardGrid items={pillars} columns="four" />

      <section className="rounded-[1.75rem] border bg-background p-8 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">What this brand should communicate</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
          Healthcare buyers care about trust before novelty. The design language should stay
          calm, clean, and direct. The message should emphasize authenticity, pharmacist-backed
          confidence, and simple service rather than aggressive promotion.
        </p>
      </section>
    </div>
  );
}
