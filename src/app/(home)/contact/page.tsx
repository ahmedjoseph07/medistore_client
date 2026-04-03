import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactMethods = [
  {
    title: "Visit a store",
    description: "House 12, Dhanmondi, Dhaka. Ideal for walk-in support and pickup queries.",
    icon: MapPin,
  },
  {
    title: "Call support",
    description: "+880 1700-000000 for order status, account help, and product guidance.",
    icon: Phone,
  },
  {
    title: "Email us",
    description: "support@medistore.com for partnerships, complaints, and general inquiries.",
    icon: Mail,
  },
  {
    title: "Working hours",
    description: "Support team available every day from 8:00 AM to 10:00 PM.",
    icon: Clock3,
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="Contact"
        title="Reach MediStore through the channel that fits the issue"
        description="This page is structured to be useful first. Customers should immediately understand where to go for orders, support, store visits, and follow-up questions."
      />
      <InfoCardGrid items={contactMethods} columns="four" />
    </div>
  );
}
