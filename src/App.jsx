import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import TraderOnboarding from "./pages/usermanagenment/TraderOnbording";
import TraderRegistration from "./pages/usermanagenment/TraderRegistration";
import CompanyOnboarding from "./pages/usermanagenment/CompanyOnbording";
import CompanyRegistration from "./pages/usermanagenment/CompanyRegistration";
import ApprovedTraders from "./pages/usermanagenment/AproovedTraders";
import OnboardingRequests from "./pages/usermanagenment/OnboardingRequests";
import TraderProfile from "./pages/usermanagenment/TraderProfile";
import AproovedCompanies from "./pages/usermanagenment/AproovedCompanies";
import CompanyProfile from "./pages/usermanagenment/CompanyProfile";
import TraderOnbording from "./pages/usermanagenment/TraderOnbording";
import QuickActions from "./pages/QuickActions"
import TraderRequestView from "./pages/usermanagenment/TraderRequestView";
// import OnboardingTraderView from "./pages/usermanagenment/OnboardingTraderView";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // 1. Dashboard Overview
        { index: true, element: <DashboardPage /> },
        { path: "summary-cards", element: <h1 className="title">Summary Cards</h1> },
        // { path: "quick-actions", element: <h1 className="title">Quick Actions</h1> },

        // 2. User Management
        { path: "trader-onboarding", element: <TraderOnboarding /> },
        { path: "trader-registration", element: <TraderRegistration /> },
        { path: "company-onboarding", element: <CompanyOnboarding /> },
        { path: "company-registration", element: <CompanyRegistration /> },
        { path: "approved-traders", element: <ApprovedTraders /> },
        { path: "onboarding-requests", element: <OnboardingRequests /> },
        { path: "trader-registration/:id", element: <TraderProfile /> },  
        { path: "aprooved-companies", element: <AproovedCompanies /> },     
        { path: "company-profile/:id", element: <CompanyProfile /> }, 
        { path: "trader-onbording", element: <TraderOnbording /> },
        { path: "quick-actions", element: <QuickActions /> },
        { path: "trader-request-view/:id", element: <TraderRequestView /> },

        // 3. Order & Trade Management
        { path: "live-orders", element: <h1 className="title">Live Orders Feed</h1> },
        { path: "order-details", element: <h1 className="title">Order Detail Page</h1> },

        // 4. Payment & Invoicing
        { path: "payments-traders", element: <h1 className="title">Payments from Traders</h1> },
        { path: "payouts-companies", element: <h1 className="title">Payouts to Companies</h1> },
        { path: "generate-reports", element: <h1 className="title">Generate Reports</h1> },

        // 5. Dispute & Complaint Resolution
        { path: "ticket-management", element: <h1 className="title">Ticket Management</h1> },

        // 6. Notifications & Communication
        { path: "system-alerts", element: <h1 className="title">System Alerts</h1> },
        { path: "broadcast-messaging", element: <h1 className="title">Broadcast Messaging</h1> },

        // 7. Reporting & Analytics
        { path: "dashboard-metrics", element: <h1 className="title">Dashboard Metrics</h1> },
        { path: "report-export", element: <h1 className="title">Report Export</h1> },

        // 8. Access Control & Admin Roles
        { path: "role-definitions", element: <h1 className="title">Role Definitions</h1> },

        // 9. Settings & Configurations
        { path: "platform-configurations", element: <h1 className="title">Platform Configurations</h1> },
        { path: "other-settings", element: <h1 className="title">Other Settings</h1> },

       
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
