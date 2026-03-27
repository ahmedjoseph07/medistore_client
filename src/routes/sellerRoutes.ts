import {
    Store,
    Pill,
    ShoppingCart,
    BarChart3,
} from "lucide-react";

export const sellerRoutes = [
    {
        title: "Dashboard",
        icon: BarChart3,
        items: [
            { title: "Overview", url: "/seller-dashboard" },
            { title: "Statistics", url: "/dashboard/statistics" },
        ],
    },
    {
        title: "My Store",
        icon: Store,
        items: [
            { title: "My Stores", url: "/dashboard/all-stores" },
            { title: "Add Store", url: "/dashboard/add-store" },
        ],
    },
    {
        title: "Medicines",
        icon: Pill,
        items: [
            { title: "My Medicines", url: "/dashboard/all-medicines" },
            { title: "Add Medicine", url: "/dashboard/add-medicine" },
        ],
    },
    {
        title: "Orders",
        icon: ShoppingCart,
        items: [
            { title: "My Orders", url: "/dashboard/orders" },
        ],
    },
]