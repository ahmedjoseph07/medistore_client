"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import { adminRoutes } from "@/routes/adminRoutes";
import { sellerRoutes } from "@/routes/sellerRoutes";
import { Route } from "@/app/types";


export function AppSidebar({ role, ...props }: { role: string | undefined } & React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  let routes: Route[] = []

  switch (role) {
    case "admin":
      routes = adminRoutes
      break
    case "seller":
      routes = sellerRoutes
      break
    default:
      routes = []
  }

  return (
    <Sidebar {...props}>
      <SidebarContent>
        {routes.map((group) => (
          <SidebarGroup key={group.title}>

            {/* Group Title + Icon */}
            <SidebarGroupLabel className="flex items-center gap-2">
              <group.icon className="w-4 h-4" />
              {group.title}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>

                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                    >
                      <Link href={item.url} className="flex items-center gap-2">
                        {/* Optional: small dot indicator */}
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        {item.title}
                      </Link>
                    </SidebarMenuButton>

                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>

          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}