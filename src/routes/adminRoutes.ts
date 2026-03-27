import {
    Store,
    Pill,
    Users,
    ShoppingCart,
    BarChart3,
} from "lucide-react";

export const adminRoutes = [
    {
        title: "Dashboard",
        icon: BarChart3,
        items: [
            { title: "Overview", url: "/admin-dashboard" },
            { title: "Statistics", url: "/dashboard/statistics" },
        ],
    },
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
]
