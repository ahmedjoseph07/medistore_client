import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site/InfoPage";
import { Minus, Plus, ShieldCheck, ShoppingBag, Trash2, Truck } from "lucide-react";

const cartItems = [
  { name: "Napa Extend", subtitle: "Pain Relief", price: "৳120", qty: 1 },
  { name: "ORS Pack", subtitle: "Hydration Support", price: "৳60", qty: 2 },
];

export default function CartPage() {
  return (
    <div className="space-y-8 py-6">
      <PageIntro
        eyebrow="Cart"
        title="Review your order before checkout"
        description="A clear cart page reduces friction. Customers should see items, quantities, delivery confidence, and a straightforward summary without hunting for details."
      />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <article key={item.name} className="rounded-[1.5rem] border bg-background p-5 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  <p className="text-xl font-bold text-green-700">{item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3 rounded-full border px-3 py-2">
                    <Minus className="size-4 text-muted-foreground" />
                    <span className="min-w-5 text-center text-sm font-medium">{item.qty}</span>
                    <Plus className="size-4 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="icon" aria-label="Remove item">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-4 rounded-[1.5rem] border bg-background p-6 shadow-sm">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">৳240</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Delivery</span>
              <span className="font-medium">৳50</span>
            </div>
            <div className="flex items-center justify-between border-t pt-3">
              <span className="font-semibold">Total</span>
              <span className="text-2xl font-bold text-green-700">৳290</span>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Proceed to Checkout
          </Button>

          <div className="grid gap-3">
            <div className="flex items-center gap-3 rounded-2xl bg-muted/50 px-4 py-3 text-sm">
              <Truck className="size-4 text-green-700" />
              Same-day delivery available in selected zones
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-muted/50 px-4 py-3 text-sm">
              <ShieldCheck className="size-4 text-green-700" />
              Only authentic and verified products are shipped
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-muted/50 px-4 py-3 text-sm">
              <ShoppingBag className="size-4 text-green-700" />
              Prescription review happens before restricted items are confirmed
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
