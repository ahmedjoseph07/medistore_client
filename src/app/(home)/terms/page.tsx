import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { FileText, Shield, ShoppingBag, UserRound } from "lucide-react";

const sections = [
  {
    title: "Account use",
    description: "Users should provide accurate information and keep account access secure.",
    icon: UserRound,
  },
  {
    title: "Order conditions",
    description: "Orders may depend on stock availability, verification, and policy review.",
    icon: ShoppingBag,
  },
  {
    title: "Policy compliance",
    description: "Restricted products and prescription medicine require additional checks.",
    icon: Shield,
  },
  {
    title: "Platform terms",
    description: "General site use, service limitations, and user responsibilities live here.",
    icon: FileText,
  },
];

export default function TermsPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="Terms"
        title="Core terms for using the MediStore platform"
        description="This is a designed summary page, not final legal copy. It gives the product a credible structure until you replace it with complete reviewed terms."
      />
      <InfoCardGrid items={sections} columns="four" />
    </div>
  );
}
