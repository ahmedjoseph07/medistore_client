"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AnalyticsLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const pathname = usePathname()
    return (

        <div>
            <div className="flex gap-4 border-2 p-2 m-2 rounded-xl">
                <Button asChild variant="outline" >
                    <Link href="/dashboard/statistics" className={cn("border-0", pathname === "/dashboard/statistics" &&
                        "underline underline-offset-6")}>Home</Link>
                </Button>
                <Button asChild variant="outline" >
                    <Link href="/dashboard/statistics/stats" className={cn("border-0", pathname === "/dashboard/statistics/stats" &&
                        "underline underline-offset-6")}>Statistics</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/dashboard/statistics/charts" className={cn("border-0", pathname === "/dashboard/statistics/charts" &&
                        "underline underline-offset-6")}>Charts</Link>
                </Button>
            </div>
            {children}
        </div>
    )
}
