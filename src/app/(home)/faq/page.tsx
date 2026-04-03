import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { BadgeCheck, FileCheck2, RefreshCw, Truck } from "lucide-react";

const faqItems = [
  {
    title: "Do I need a prescription?",
    description: "Only for regulated medicines. OTC products can usually be ordered directly.",
    icon: FileCheck2,
  },
  {
    title: "How do deliveries work?",
    description: "Delivery time depends on area, stock, and prescription review requirements.",
    icon: Truck,
  },
  {
    title: "Can I return an item?",
    description: "Returns depend on product type, condition, and regulatory considerations.",
    icon: RefreshCw,
  },
  {
    title: "How do you verify authenticity?",
    description: "Products are intended to come through verified sourcing and handling steps.",
    icon: BadgeCheck,
  },
];

export default function FaqPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="FAQ"
        title="Answers to the questions customers ask most often"
        description="This page is kept concise on purpose. FAQ works best when it resolves the highest-friction concerns first: prescriptions, delivery, returns, and authenticity."
      />
      <InfoCardGrid items={faqItems} columns="four" />
    </div>
  );
}
