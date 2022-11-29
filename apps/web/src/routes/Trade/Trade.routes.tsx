import { Navigate, RouteObject } from "react-router-dom";
import {
  TradeBuy,
  TradeSell,
  TradeSwap,
  TradeEarn,
  TradeCharts,
  TradeAlerts,
  TradeDeposit,
  TradeInfo,
  TradeOrders,
  TradeWithdraw,
} from "./subroutes";

import { Trade } from "./Trade";

const TradeRoutes: RouteObject[] = [
  {
    path: "/trade/:code",
    element: <Trade />,
    children: [
      {
        path: "buy",
        element: <TradeBuy />,
      },
      {
        path: "sell",
        element: <TradeSell />,
      },
      {
        path: "swap",
        element: <TradeSwap />,
      },
      {
        path: "earn",
        element: <TradeEarn />,
      },
      {
        path: "charts",
        element: <TradeCharts />,
      },
      {
        path: "alerts",
        element: <TradeAlerts />,
      },
      {
        path: "orders",
        element: <TradeOrders />,
      },
      {
        path: "deposit",
        element: <TradeDeposit />,
      },
      {
        path: "withdraw",
        element: <TradeWithdraw />,
      },
      {
        path: "info",
        element: <TradeInfo />,
      },
    ],
  },
  {
    path: "/trade",
    element: <Navigate to="/trade/BTC/buy" replace />,
  },
];

export { TradeRoutes };
