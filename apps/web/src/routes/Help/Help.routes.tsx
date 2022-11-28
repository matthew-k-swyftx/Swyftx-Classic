import { RouteObject } from "react-router-dom";
import { Help } from "./Help";

const HelpRoutes: RouteObject[] = [
  {
    path: "/help",
    element: <Help />,
  },
];

export { HelpRoutes };
