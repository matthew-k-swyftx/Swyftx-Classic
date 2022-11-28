import { RouteObject } from "react-router-dom";
import { RecurringOrders } from "./RecurringOrders";

const RecurringOrdersRoutes: RouteObject[] = [
  {
    path: "/recurring-orders",
    element: <RecurringOrders />,
  },
];

export { RecurringOrdersRoutes };
