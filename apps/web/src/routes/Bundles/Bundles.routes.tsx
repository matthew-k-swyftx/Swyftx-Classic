import { RouteObject } from "react-router-dom";
import { Bundles } from "./Bundles";

const BundlesRoutes: RouteObject[] = [
  {
    path: "/bundles",
    element: <Bundles />,
  },
];

export { BundlesRoutes };
