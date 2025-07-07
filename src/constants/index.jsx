import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users, ChevronRight, ChevronDown,
  ChevronUp, } from "lucide-react";

import ProfileImage from "@/assets/product-image.png";
import ProductImage from "@/assets/product-image.png";

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
            {
                label: "Reports",
                icon: NotepadText,
                path: "/reports",
            },
        ],
    },
    {
        title: "Traders",
        links: [
            {
                label: "All Traders",
                icon: ChevronRight,
                path: "/all-traders",
            },
            {
                label: "Trader Orders",
                icon: ChevronRight,
                path: "/trader-orders",
            },
            {
                label: "Broiler Rates",
                icon: ChevronRight,
                path: "/broiler-rates",
            },
            {
                label: "Disputes / Complaints",
                icon: ChevronRight,
                path: "/disputes-complaints",
            },
            {
                label: "Trader Payments",
                icon: ChevronRight,
                path: "/trader-payments",
            },
            {
                label: "Trader Registration",
                icon: ChevronRight,
                path: "/trader-registration",
            }
        ],
    },
    {
        title: "Companies",
        links: [
            {
                label: "All Contract Companies ",
                icon: ChevronRight,
                path: "/all-contract-companies",
            },
            {
                label: "All Branches",
                icon: ChevronRight,
                path: "/all-branches",
            },
            {
                label: "Listed Farms",
                icon: ChevronRight,
                path: "/listed-farms",
            },
            {
                label: "Company Orders",
                icon: ChevronRight,
                path: "/company-orders",
            },
            {
            },
            {
                label: "Sales Report",
                icon: ChevronRight,
                path: "/sales-report",
            },
            {
            },
            {
                label: "Zone-wise Analytics",
                icon: ChevronRight,
                path: "/zone-wise-analytics",
            },
            {
                label: "Company Registration",
                icon: ChevronRight,
                path: "/company-registration",
            }

        ],
    },
    {
        title: "General Managers (Marketing)",
        links: [
            {
                label: "List of GMs",
                icon: ChevronRight,
                path: "/list-of-general-managers",
            },
            {
                label: "Add / Manage GMs",
                icon: ChevronRight,
                path: "/add-manage-gms",
            },
            {
                label: "Assign Zones",
                icon: ChevronRight,
                path: "/assign-zones",
            },
            {
                label: "Daily Rate Setup",
                icon: ChevronRight,
                path: "/daily-rate-setup",
            },
            {
                label: "Add Assistant General Managers",
                icon: ChevronRight,
                path: "/add-assistant-general-managers",
            },
        ],
    },
    {
        title: "Assistant General Managers (Zonal)",
        links: [
            {
                label: "Add / Manage AGMs",
                icon: ChevronRight,
                path: "/add-manage-agms",
            },
            {
                label: "Assign Booking Managers",
                icon: ChevronRight,
                path: "/assign-booking-managers",
            },
            {
                label: "Branch Management",
                icon: ChevronRight,
                path: "/branch-management",
            },
        ],
    },
    {
        title: "Booking Managers",
        links: [
            {
                label: "Add / Manage Booking Managers",
                icon: ChevronRight,
                path: "/add-manage-booking-managers",
            },
            {
                label: " Add Farms to Sale (visible in Trader App)",
                icon: ChevronRight,
                path: "/add-farms-to-sale",
            },
            {
                label: "Order Fulfilment",
                icon: ChevronRight,
                path: "/order-fulfilment",
            },
             {
                label: "Inventory Management (Farm-wise Stock)",
                icon: ChevronRight,
                path: "/inventory-management",
            },
             {
                label: "Schedule Deliveries",
                icon: ChevronRight,
                path: "/schedule-deliveries",
            },
             {
                label: "Daily Rate Setup (Branch-wise)",
                icon: ChevronRight,
                path: "/daily-rate-setup-branch-wise",
            },
        ],
    },
     {
        title: "Lifting Supervisor",
        links: [
            {
                label: "View Assigned Orders",
                icon: ChevronRight,
                path: "/view-assigned-orders",
            },
            {
                label: "Order Details",
                icon: ChevronRight,
                path: "/order-details",
            },
            {
                label: "Mark Delivery Complete",
                icon: ChevronRight,
                path: "/mark-delivery-complete",
            },
        ],
    },
      {
        title: "Finance / Accounts",
        links: [
            {
                label: "View Payments (Pending / Completed)",
                icon: ChevronRight,
                path: "/view-payments",
            },
            {
                label: "Generate Invoices",
                icon: ChevronRight,
                path: "/generate-invoices",
            },
            {
                label: "Ledger Reports",
                icon: ChevronRight,
                path: "/ledger-reports",
            },
            {
                label: "Payment Confirmations",
                icon: ChevronRight,
                path: "/payment-confirmations",
            },
        ],
    },
    {
        title: "Admin Users & Roles",
        links: [
            {
                label: "Add Admin / Sub-admin",
                icon: ChevronRight,
                path: "/add-admin-sub-admin",
            },
            {
                label: "Set Permissions",
                icon: ChevronRight,
                path: "/set-permissions",
            },
            {
                label: "Role-wise Access",
                icon: ChevronRight,
                path: "/role-wise-access",
            },
        ],
    },
    {
        title: "Settings / Config",
        links: [
            {
                label: "Notifications",
                icon: ChevronRight,
                path: "/notifications",
            },
            {
                label: "Zones / Cities",
                icon: ChevronRight,
                path: "/zones-cities",
            },
            {
                label: "App Settings",
                icon: ChevronRight,
                path: "/app-settings",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Suguna Foods Private Limited",
        email: "contact@sugunafoods.com",
        image: ProfileImage,
        total: 1500,
      },
      {
        id: 2,
        name: "Venkateshwara Hatcheries",
        email: "info@venkateshwarahatcheries.com",
        image: ProfileImage,
        total: 2000,
      },
      {
        id: 3,
        name: "Godrej Agrovet Limited",
        email: "support@godrejagrovet.com",
        image: ProfileImage,
        total: 4000,
      },
      {
        id: 4,
        name: "Skylark Hatcheries",
        email: "sales@skylarkhatcheries.com",
        image: ProfileImage,
        total: 3000,
      },
      {
        id: 5,
        name: "Shanthi Feeds Private Limited",
        email: "info@shanthifeeds.com",
        image: ProfileImage,
        total: 2500,
      },
      {
        id: 6,
        name: "Sneha Farms Private Limited",
        email: "contact@snehafarms.com",
        image: ProfileImage,
        total: 4500,
      },
      {
        id: 7,
        name: "ABT Foods Limited",
        email: "hello@abtfoods.com",
        image: ProfileImage,
        total: 5300,
      },
];

export const topProducts = [
    {
        number: 1,
        name: "Gautam",
        image: ProductImage,
        description: "#ORD-2025-001",
        price: "500 kg",
        status: "Received",
        rating: "Paid",
      },
      {
        number: 2,
        name: "Ravi",
        image: ProductImage,
        description: "#ORD-2025-002",
        price: "800 kg",
        status: "Pending",
        rating: "Unpaid",
      },
      {
        number: 3,
        name: "Anjali",
        image: ProductImage,
        description: "#ORD-2025-003",
        price: "600 kg",
        status: "Dispatched",
        rating: "Paid",
      },
      {
        number: 4,
        name: "Kiran",
        image: ProductImage,
        description: "#ORD-2025-004",
        price: "350 kg",
        status: "Received",
        rating: "Paid",
      },
      {
        number: 5,
        name: "Suresh",
        image: ProductImage,
        description: "#ORD-2025-005",
        price: "920 kg",
        status: "Pending",
        rating: "Unpaid",
      },
      {
        number: 6,
        name: "Neha",
        image: ProductImage,
        description: "#ORD-2025-006",
        price: "450 kg",
        status: "Dispatched",
        rating: "Paid",
      },
      {
        number: 7,
        name: "Manish",
        image: ProductImage,
        description: "#ORD-2025-007",
        price: "700 kg",
        status: "Received",
        rating: "Paid",
      },
      {
        number: 8,
        name: "Pooja",
        image: ProductImage,
        description: "#ORD-2025-008",
        price: "300 kg",
        status: "Cancelled",
        rating: "Unpaid",
      },
      {
        number: 9,
        name: "Ramesh",
        image: ProductImage,
        description: "#ORD-2025-009",
        price: "650 kg",
        status: "Dispatched",
        rating: "Paid",
      },
      {
        number: 10,
        name: "Sunita",
        image: ProductImage,
        description: "#ORD-2025-010",
        price: "550 kg",
        status: "Received",
        rating: "Paid",
      },
];
