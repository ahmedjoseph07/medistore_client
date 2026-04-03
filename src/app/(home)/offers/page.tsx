import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { BadgePercent, HeartPulse, PackageCheck, Sparkles } from "lucide-react";

const offers = [
  {
    title: "Daily essentials discount",
    description: "Rotating savings on fast-moving OTC and personal care products.",
    icon: BadgePercent,
  },
  {
    title: "Bundle savings",
    description: "Save more when you purchase frequently paired care items together.",
    icon: PackageCheck,
  },
  {
    title: "Supplement deals",
    description: "Featured pricing on vitamins and wellness products customers reorder often.",
    icon: Sparkles,
  },
  {
    title: "Family care offers",
    description: "Promotional pricing on hygiene, baby care, and seasonal support products.",
    icon: HeartPulse,
  },
];

export default function OffersPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="Offers"
        title="Promotions designed around repeat health needs"
        description="Offer pages should feel practical, not noisy. This layout keeps promotions clear, credible, and aligned with healthcare commerce rather than generic e-commerce flash sales."
      />
      <InfoCardGrid items={offers} columns="four" />
    </div>
  );
}
