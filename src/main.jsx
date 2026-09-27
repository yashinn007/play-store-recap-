import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import AppPage from "./pages/AppPage";
import DetailPage from "./pages/DetailPage";
import InstalledPage from "./pages/InstalledPage";
import DashboardPage from "./pages/DashboardPage";
import RootLayout from "./RootLayout/RootLayout";
import InstalledDataProvider from "./context/InstalledDataProvider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/apps",
        Component: AppPage,
      },
      {
        path: "/apps/Details/:id",
        Component: DetailPage,
      },
      {
        path: "/install",
        Component: InstalledPage,
      },
      {
        path: "/dashboard",
        Component: DashboardPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstalledDataProvider>
      <RouterProvider router={router} />,
    </InstalledDataProvider>
  </StrictMode>,
);
