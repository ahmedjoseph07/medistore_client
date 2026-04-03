import { cn } from "@/lib/utils";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("border-t bg-muted/20", className)}>
      <div className="container mx-auto px-4 py-12">

        {/* Top */}
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.avif" alt="MediStore" className="h-8" />
              <span className="text-lg font-bold tracking-tighter">
                MediStore
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Trusted online pharmacy providing safe, authentic, and affordable medicines across Bangladesh.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-sm font-bold">
              Shop
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/store" className="hover:underline">All Medicines</Link></li>
              <li><Link href="/cart" className=" hover:underline">Cart</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-bold">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/store" className="hover:underline">Stores</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MediStore. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-gray-600 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-gray-600 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export { Footer };
