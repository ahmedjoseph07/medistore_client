import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { AlertTriangle, ClipboardList, PackageCheck, ShieldAlert } from "lucide-react";

const rules = [
  {
    title: "Eligibility review",
    description: "Returns depend on product type, packaging condition, and local requirements.",
    icon: ClipboardList,
  },
  {
    title: "Safety first",
    description: "Opened, temperature-sensitive, or restricted medicine may not be returnable.",
    icon: ShieldAlert,
  },
  {
    title: "Issue reporting",
    description: "Damaged or incorrect items should be reported quickly with order details.",
    icon: AlertTriangle,
  },
  {
    title: "Resolution flow",
    description: "Approved cases may lead to replacement, refund, or support follow-up.",
    icon: PackageCheck,
  },
];

export default function ReturnsPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="Returns"
        title="Return policy should protect both safety and customer trust"
        description="For pharmacy products, return handling has more constraints than general retail. This page sets expectations while still giving customers a clear resolution path."
      />
      <InfoCardGrid items={rules} columns="four" />
    </div>
  );
}
