import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

const products = [
  { id: 1, name: "Napa Extend", category: "Pain Relief", price: "৳120", rating: "4.8" },
  { id: 2, name: "Seclo 20mg", category: "Digestive Care", price: "৳180", rating: "4.7" },
  { id: 3, name: "ORS Pack", category: "Hydration", price: "৳60", rating: "4.9" },
  { id: 4, name: "Ceevit", category: "Vitamin C", price: "৳95", rating: "4.8" },
  { id: 5, name: "Savlon Handwash", category: "Personal Care", price: "৳210", rating: "4.6" },
  { id: 6, name: "Accu Check Strips", category: "Diabetes Care", price: "৳950", rating: "4.9" },
];

export default function FeaturedProductsSection() {
  return (
    <section className="space-y-6 pb-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-700">
            Featured products
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Best sellers customers reorder often
          </h2>
        </div>
        <Button asChild variant="outline">
          <Link href="/store">
            View all products
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-[1.5rem] border bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-40 items-center justify-center bg-gradient-to-br from-green-50 via-muted/40 to-emerald-100/70">
              <div className="rounded-full border border-green-200 bg-background px-4 py-2 text-sm font-medium text-green-700">
                {product.category}
              </div>
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  <Star className="size-3.5 fill-current" />
                  {product.rating}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-green-700">{product.price}</p>
                <Button size="sm">
                  <ShoppingCart className="size-4" />
                  Add
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
