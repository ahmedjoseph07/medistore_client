import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { CircleHelp, ClipboardCheck, PackageOpen, ReceiptText } from "lucide-react";

const helpTopics = [
  {
    title: "Order help",
    description: "Track active orders, understand delays, and review confirmation steps.",
    icon: ClipboardCheck,
  },
  {
    title: "Delivery support",
    description: "See delivery coverage, timing, and what happens if an attempt fails.",
    icon: PackageOpen,
  },
  {
    title: "Billing questions",
    description: "Understand invoices, totals, and payment-related order questions.",
    icon: ReceiptText,
  },
  {
    title: "General guidance",
    description: "Start here if you are unsure which support path matches your issue.",
    icon: CircleHelp,
  },
];

export default function HelpPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="Help center"
        title="Find support without digging through the site"
        description="A help center should guide the user to the right answer quickly. This version keeps the structure clear and task-oriented rather than overwhelming."
      />
      <InfoCardGrid items={helpTopics} columns="four" />
    </div>
  );
}
