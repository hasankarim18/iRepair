import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import AddServices from "@/pages/admin/AddServices";
import Dashboard from "@/pages/admin/Dashboard";
import ServicesList from "@/pages/admin/ServicesList";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        //  path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        // path: "/admin",
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "service-list",
        element: <ServicesList />,
      },
      {
        path: "add-service",
        element: <AddServices />,
      },
    ],
  },
]);

export default router;
