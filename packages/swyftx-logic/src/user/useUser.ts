import { useContext } from "react";
import { UserContext } from "./user.context";

const useUser = () => {
  const { user, fetchUser } = useContext(UserContext);

  return { user: user?.user.profile, fetchUser };
};

export { useUser };
