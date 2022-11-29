import { useMemo } from "react";
import { useSwyftxAccount } from "./Account";
import { useSwyftxAuthentication } from "./Authentication";
import { useSwyftxMarkets } from "./Markets";
import { useSwyftxOrders } from "./Orders";

const useSwyftxClient = () => {
  const accessToken = window.localStorage.getItem("access_token") || "";

  const Authentication = useSwyftxAuthentication(accessToken);
  const Account = useSwyftxAccount(accessToken);
  const Markets = useSwyftxMarkets(accessToken);
  const Orders = useSwyftxOrders(accessToken);

  const client = useMemo(
    () => ({
      Authentication,
      Account,
      Markets,
      Orders,
    }),
    [Account, Authentication, Markets, Orders]
  );

  return {
    client,
  };
};

export { useSwyftxClient };
