import { RouteObject } from "react-router-dom";
import { AssetList } from "./AssetList";

const AssetListRoutes: RouteObject[] = [
  {
    path: "/asset-list",
    element: <AssetList />,
  },
];

export { AssetListRoutes };
