import { RouteObject } from "react-router-dom";
import { Login } from "./Login";

const LoginRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
];

export { LoginRoutes };
