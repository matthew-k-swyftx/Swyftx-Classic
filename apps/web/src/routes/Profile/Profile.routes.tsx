import { Navigate, RouteObject } from "react-router-dom";
import { Profile } from "./Profile";

const ProfileRoutes: RouteObject[] = [
  {
    path: "/profile/about",
    element: <Profile />,
  },
  {
    path: "/profile/verification",
    element: <Profile />,
  },
  {
    path: "/profile/refer-a-friend",
    element: <Profile />,
  },
  {
    path: "/profile/api-keys",
    element: <Profile />,
  },
  {
    path: "/profile",
    element: <Navigate to="/profile/about" replace />,
  },
];

export { ProfileRoutes };
