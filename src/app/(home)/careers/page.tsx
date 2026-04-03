import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { BriefcaseBusiness, HeartHandshake, PackageSearch, UserRoundPlus } from "lucide-react";

const roles = [
  {
    title: "Pharmacy operations",
    description: "Support prescription flow, product accuracy, and order review quality.",
    icon: PackageSearch,
  },
  {
    title: "Customer support",
    description: "Help customers resolve delivery, account, and product-related questions.",
    icon: HeartHandshake,
  },
  {
    title: "Business roles",
    description: "Work on growth, sourcing, and service quality across the business.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Future openings",
    description: "Share your profile for upcoming opportunities as the platform expands.",
    icon: UserRoundPlus,
  },
];

export default function CareersPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="Careers"
        title="Build healthcare commerce that people can trust"
        description="Career pages should reflect mission and operational seriousness. For MediStore, that means reliability, empathy, and careful execution matter more than startup-style slogans."
      />
      <InfoCardGrid items={roles} columns="four" />
    </div>
  );
}
