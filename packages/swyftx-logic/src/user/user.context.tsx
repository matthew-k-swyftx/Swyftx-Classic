import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

import { GetProfileResponse, useSwyftxClient } from "@mklem92/swyftx-api";

type Props = {
  user?: GetProfileResponse;
  fetchUser: () => void;
};

export const UserContext = React.createContext<Props>({
  user: undefined,
  fetchUser: () => {},
});

const UserProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<GetProfileResponse>();
  const { client } = useSwyftxClient();

  const fetchUser = useCallback(async () => {
    const resp = await client.Account.GetProfile();
    setUser(resp);
  }, [client]);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
