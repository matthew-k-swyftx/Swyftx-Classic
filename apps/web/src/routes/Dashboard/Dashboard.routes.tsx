import { RouteObject } from "react-router-dom";
import { Dashboard } from "./Dashboard";

const DashboardRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export { DashboardRoutes };
