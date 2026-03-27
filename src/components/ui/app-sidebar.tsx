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

import {
  Store,
  Pill,
  Layers,
  Users,
  ShoppingCart,
  CreditCard,
  Star,
  BarChart3,
} from "lucide-react";

const data = {
  navMain: [
    {
      title: "Store Management",
      icon: Store,
      items: [
        { title: "All Stores", url: "/dashboard/all-stores" },
        { title: "Add Store", url: "/dashboard/add-store" },
      ],
    },
    {
      title: "Medicine Management",
      icon: Pill,
      items: [
        { title: "All Medicines", url: "/dashboard/all-medicines" },
        { title: "Add Medicine", url: "/dashboard/add-medicine" },
        { title: "Categories", url: "/dashboard/categories" },
      ],
    },
    {
      title: "Orders & Sales",
      icon: ShoppingCart,
      items: [
        { title: "Orders", url: "/dashboard/orders" },
        { title: "Payments", url: "/dashboard/payments" },
      ],
    },
    {
      title: "Users & Reviews",
      icon: Users,
      items: [
        { title: "All Users", url: "/dashboard/users" },
        { title: "Reviews", url: "/dashboard/reviews" },
      ],
    },
    {
      title: "Analytics",
      icon: BarChart3,
      items: [
        { title: "Overview", url: "/dashboard" },
      ],
    },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarContent>
        {data.navMain.map((group) => (
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