import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import AllTraders from "./pages/AllTraders";
import TraderOrders from "./pages/TraderOrders";
import BroilerRates from "./pages/BroilerRates";
import TraderPayments from "./pages/TraderPayments";



function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
        path: "all-traders",
        element: <AllTraders />, // ✅ Your new page here
    },
    {
        path: "trader-orders",
        element: <TraderOrders />, // ✅ Your new page here
    },
    {
        path: "broiler-rates",
        element: <BroilerRates />, // ✅ Your new page here
    },
    {
        path: "trader-payments",
        element: <TraderPayments />, // ✅ Your new page here
    },

                // {
                //     path: "analytics",
                //     element: <h1 className="title">Analytics</h1>,
                // },
                // {
                //     path: "reports",
                //     element: <h1 className="title">Reports</h1>,
                // },
                // {
                //     path: "all-orders",
                //     element: <h1 className="title">All Orders</h1>,
                // },
                // {
                //     path: "new-customer",
                //     element: <h1 className="title">New Customer</h1>,
                // },
                // {
                //     path: "verified-customers",
                //     element: <h1 className="title">Verified Customers</h1>,
                // },
                // {
                //     path: "products",
                //     element: <h1 className="title">Products</h1>,
                // },
                // {
                //     path: "new-product",
                //     element: <h1 className="title">New Product</h1>,
                // },
                // {
                //     path: "inventory",
                //     element: <h1 className="title">Inventory</h1>,
                // },
                // {
                //     path: "settings",
                //     element: <h1 className="title">Settings</h1>,
                // },

                // 📊 Dashboard
   
    { path: "analytics", element: <h1 className="title">Analytics</h1> },
    { path: "reports", element: <h1 className="title">Reports</h1> },

    // 👤 Traders
    { path: "all-traders", element: <h1 className="title">All Traders</h1> },
    { path: "trader-orders", element: <h1 className="title">Trader Orders</h1> },
    { path: "broiler-rates", element: <h1 className="title">Broiler Rates</h1> },
    { path: "disputes-complaints", element: <h1 className="title">Disputes / Complaints</h1> },
    { path: "trader-payments", element: <h1 className="title">Trader Payments</h1> },

    // 🏢 Company
    { path: "all-contract-companies", element: <h1 className="title">All Contract Companies</h1> },
    { path: "all-branches", element: <h1 className="title">All Branches</h1> },
    { path: "listed-farms", element: <h1 className="title">Listed Farms</h1> },
    { path: "company-orders", element: <h1 className="title">Company Orders</h1> },
    { path: "sales-report", element: <h1 className="title">Sales Report</h1> },
    { path: "zone-wise-analytics", element: <h1 className="title">Zone-wise Analytics</h1> },

    // 🧑‍💼 General Managers
    { path: "list-of-general-managers", element: <h1 className="title">List of General Managers</h1> },
    { path: "add-manage-gms", element: <h1 className="title">Add / Manage GMs</h1> },
    { path: "assign-zones", element: <h1 className="title">Assign Zones</h1> },
    { path: "daily-rate-setup", element: <h1 className="title">Daily Rate Setup</h1> },
    { path: "add-assistant-general-managers", element: <h1 className="title">Add Assistant General Managers</h1> },

    // 👔 Assistant General Managers
    { path: "add-manage-AGMs", element: <h1 className="title">Add / Manage AGMs</h1> },
    { path: "assign-booking-managers", element: <h1 className="title">Assign Booking Managers</h1> },
    { path: "branch-management", element: <h1 className="title">Branch Management</h1> },

    // 📌 Booking Managers
    { path: "add-manage-booking-managers", element: <h1 className="title">Add / Manage Booking Managers</h1> },
    { path: "add-farms-to-sale", element: <h1 className="title">Add Farms to Sale</h1> },
    { path: "order-fulfilment", element: <h1 className="title">Order Fulfilment</h1> },
    { path: "inventory-management", element: <h1 className="title">Inventory Management</h1> },
    { path: "schedule-deliveries", element: <h1 className="title">Schedule Deliveries</h1> },
    { path: "daily-rate-setup-branch-wise", element: <h1 className="title">Daily Rate Setup (Branch-wise)</h1> },

    // 🚚 Lifting Supervisor
    { path: "view-assigned-orders", element: <h1 className="title">View Assigned Orders</h1> },
    { path: "order-details", element: <h1 className="title">Order Details</h1> },
    { path: "mark-delivery-complete", element: <h1 className="title">Mark Delivery Complete</h1> },

    // 💳 Finance / Accounts
    { path: "view-payments", element: <h1 className="title">View Payments</h1> },
    { path: "generate-invoices", element: <h1 className="title">Generate Invoices</h1> },
    { path: "ledger-reports", element: <h1 className="title">Ledger Reports</h1> },
    { path: "payment-confirmations", element: <h1 className="title">Payment Confirmations</h1> },

    // 🧑‍🤝‍🧑 Admin Users & Roles
    { path: "add-admin-sub-admin", element: <h1 className="title">Add Admin / Sub-admin</h1> },
    { path: "set-permissions", element: <h1 className="title">Set Permissions</h1> },
    { path: "role-wise-access", element: <h1 className="title">Role-wise Access</h1> },

    // ⚙️ Settings / Config
    { path: "notifications", element: <h1 className="title">Notifications</h1> },
    { path: "zones-cities", element: <h1 className="title">Zones / Cities</h1> },
    { path: "app-settings", element: <h1 className="title">App Settings</h1> },





                
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
