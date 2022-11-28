import { RouteObject } from "react-router-dom";
import { OrderHistory } from "./OrderHistory";

const OrderHistoryRoutes: RouteObject[] = [
  {
    path: "/order-history",
    element: <OrderHistory />,
  },
];

export { OrderHistoryRoutes };
