import { Navigate, RouteObject } from "react-router-dom";
import {
  TradeBuy,
  TradeCharts,
  TradeDeposit,
  TradeInfo,
  TradeOrders,
  TradeSell,
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
        path: "charts",
        element: <TradeCharts />,
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
