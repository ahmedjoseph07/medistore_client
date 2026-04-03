import { InfoCardGrid, PageIntro } from "@/components/site/InfoPage";
import { Clock3, MapPinned, PackageSearch, ShieldCheck } from "lucide-react";

const shippingItems = [
  {
    title: "Coverage areas",
    description: "Service availability can vary by city, zone, and courier capability.",
    icon: MapPinned,
  },
  {
    title: "Delivery timing",
    description: "Same-day or next-day delivery depends on stock and prescription review.",
    icon: Clock3,
  },
  {
    title: "Order tracking",
    description: "Customers should receive clear status updates from confirmation to dispatch.",
    icon: PackageSearch,
  },
  {
    title: "Secure handling",
    description: "Packaging and transport should protect product quality and customer privacy.",
    icon: ShieldCheck,
  },
];

export default function ShippingPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="Shipping"
        title="Delivery expectations should be clear before checkout"
        description="Shipping information has one job: reduce uncertainty. Customers need to understand timing, coverage, tracking, and handling standards before they commit to an order."
      />
      <InfoCardGrid items={shippingItems} columns="four" />
    </div>
  );
}
