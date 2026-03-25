import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container mx-auto px-4 py-12">

        {/* Top */}
        <div className="grid gap-10 md:grid-cols-5">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/logo.avif" alt="MediStore" className="h-8" />
              <span className="text-lg font-bold tracking-tighter">
                MediStore
              </span>
            </div>
            <p className="mt-4 text-sm  max-w-sm">
              Trusted online pharmacy providing safe, authentic, and affordable medicines across Bangladesh.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-bold mb-4">
              Shop
            </h3>
            <ul className="space-y-2 text-sm ">
              <li><a href="/shop" className="hover:underline">All Medicines</a></li>
              <li><a href="/categories" className=" hover:underline">Categories</a></li>
              <li><a href="/cart" className=" hover:underline">Cart</a></li>
              <li><a href="/offers" className="hover:underline">Offers</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm ">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/store" className="hover:underline">Stores</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="hover:underline">Help Center</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/returns" className="hover:underline">Returns</a></li>
              <li><a href="/shipping" className="hover:underline">Shipping</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MediStore. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/terms" className="hover:text-gray-600 hover:underline">
              Terms
            </a>
            <a href="/privacy" className="hover:text-gray-600 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export { Footer };