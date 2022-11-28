import { RouteObject } from "react-router-dom";
import { Shop } from "./Shop";

const ShopRoutes: RouteObject[] = [
  {
    path: "/shop",
    element: <Shop />,
  },
];

export { ShopRoutes };
