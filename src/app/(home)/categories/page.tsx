import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { Baby, HeartPulse, Pill, ScanSearch, Sparkles, Syringe } from "lucide-react";

const categories = [
  {
    title: "Prescription Medicine",
    description: "Upload a prescription and access regulated medicine with proper review.",
    icon: ScanSearch,
  },
  {
    title: "OTC Relief",
    description: "Fast access to cold, fever, pain, and stomach care for daily needs.",
    icon: Pill,
  },
  {
    title: "Vitamins & Supplements",
    description: "Support immunity, bone health, and energy with popular daily essentials.",
    icon: Sparkles,
  },
  {
    title: "Diabetes Care",
    description: "Browse testing strips, monitors, and routine management products.",
    icon: Syringe,
  },
  {
    title: "Baby Care",
    description: "Gentle care products for feeding, hygiene, and newborn wellness.",
    icon: Baby,
  },
  {
    title: "Personal Care",
    description: "Skin, oral, and hygiene products chosen for everyday health routines.",
    icon: HeartPulse,
  },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="Categories"
        title="Browse products by care need"
        description="This page groups MediStore essentials into clear, high-demand care categories so customers can move faster than they would in one long store listing."
      />
      <InfoCardGrid items={categories} />
    </div>
  );
}
