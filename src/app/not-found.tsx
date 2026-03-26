import { Button } from "@/components/ui/button";
import { ArrowBigLeft, Pill } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full text-center">

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
                        <span className="text-3xl  text-green-700"><Pill/></span>
                    </div>
                </div>

                {/* 404 */}
                <h1 className="text-6xl font-bold text-green-500 mb-2">404</h1>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Medistore Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                    The page you're looking for might have been removed, renamed, or is temporarily unavailable.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild>
                        <Link href="/">
                            <ArrowBigLeft />
                            Home
                        </Link>
                    </Button>


                    <Button variant="outline" asChild>
                        <Link href="/store">
                            <Pill/>
                            Browse Stores
                        </Link>
                    </Button>
                </div>

                {/* Footer text */}
                <p className="text-xs text-gray-400 mt-6">
                    Need help? Visit homepage to search medicines.
                </p>
            </div>
        </div>
    );
}