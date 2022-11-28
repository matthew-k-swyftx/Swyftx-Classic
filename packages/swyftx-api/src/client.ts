import { useMemo } from "react";
import { useSwyftxAccount } from "./Account";
import { useSwyftxAuthentication } from "./Authentication";
import { useSwyftxMarkets } from "./Markets";

const useSwyftxClient = () => {
  const accessToken = window.localStorage.getItem("access_token") || "";

  const Authentication = useSwyftxAuthentication(accessToken);
  const Account = useSwyftxAccount(accessToken);
  const Markets = useSwyftxMarkets(accessToken);

  const client = useMemo(
    () => ({
      Authentication,
      Account,
      Markets,
    }),
    [Account, Authentication, Markets]
  );

  return {
    client,
  };
};

export { useSwyftxClient };
