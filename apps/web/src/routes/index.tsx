import { Navigate, RouteObject } from "react-router-dom";

import { AppLayout } from "@mklem92/swyftx-classic-ui";

import { AssetListRoutes } from "./AssetList/AssetList.routes";
import { BundlesRoutes } from "./Bundles/Bundles.routes";
import { DashboardRoutes } from "./Dashboard/Dashboard.routes";
import { HelpRoutes } from "./Help/Help.routes";
import { LoginRoutes } from "./Login/Login.routes";
import { OrderHistoryRoutes } from "./OrderHistory/OrderHistory.routes";
import { ProfileRoutes } from "./Profile/Profile.routes";
import { RecurringOrdersRoutes } from "./RecurringOrders/RecurringOrders.routes";
import { ShopRoutes } from "./Shop/Shop.routes";
import { TradeRoutes } from "./Trade/Trade.routes";

const router: RouteObject[] = [
  ...LoginRoutes,
  {
    path: "/",
    element: <AppLayout />,
    children: [
      ...AssetListRoutes,
      ...BundlesRoutes,
      ...DashboardRoutes,
      ...HelpRoutes,
      ...OrderHistoryRoutes,
      ...ProfileRoutes,
      ...RecurringOrdersRoutes,
      ...ShopRoutes,
      ...TradeRoutes,
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
    ],
  },
];

export { router };
