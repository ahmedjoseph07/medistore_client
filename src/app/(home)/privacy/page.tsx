import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { Database, EyeOff, LockKeyhole, UserCheck } from "lucide-react";

const sections = [
  {
    title: "Data collection",
    description: "Collect only the order, account, and support details needed to operate service.",
    icon: Database,
  },
  {
    title: "Access control",
    description: "Sensitive customer and order data should be visible only to authorized roles.",
    icon: LockKeyhole,
  },
  {
    title: "Responsible use",
    description: "Data should support fulfillment, support, and compliance rather than vague reuse.",
    icon: UserCheck,
  },
  {
    title: "Customer privacy",
    description: "Packaging, communication, and account handling should respect confidentiality.",
    icon: EyeOff,
  },
];

export default function PrivacyPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="Privacy"
        title="Privacy expectations should be visible and understandable"
        description="This page gives your product a structured privacy presence now, while leaving room for full legal language later. It focuses on clarity, restraint, and customer confidence."
      />
      <InfoCardGrid items={sections} columns="four" />
    </div>
  );
}
