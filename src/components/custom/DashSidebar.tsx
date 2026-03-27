import { AppSidebar } from "@/components/ui/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Button } from "../ui/button"

export default function DashSidebar({ children, seller, admin, role }: { children: React.ReactNode, seller: React.ReactNode, admin: React.ReactNode, role?: string }) {

  return (
    <SidebarProvider>
      <AppSidebar role={role} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* {children} */}
          {role === "admin" ? admin : seller}
          {/* {admin} */}
          {/* {seller} */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
