import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  GetProfileBalancesResponse,
  useSwyftxClient,
} from "@mklem92/swyftx-api";

export type BalanceMap = {
  [assetId: number]: Omit<GetProfileBalancesResponse, "assetId">;
};

export const BalancesContext = React.createContext<BalanceMap>({});

const BalancesProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [balances, setBalances] = useState<BalanceMap>({});
  const { client } = useSwyftxClient();

  const getBalances = useCallback(async () => {
    const resp = await client.Account.GetBalances();
    const newBalances: BalanceMap = {};

    resp.forEach((bal) => {
      const { assetId, availableBalance, stakingBalance } = bal;
      newBalances[assetId] = {
        availableBalance,
        stakingBalance,
      };
    });
    setBalances(newBalances);
  }, [client]);

  useEffect(() => {
    getBalances();
  }, []);

  return (
    <BalancesContext.Provider value={balances}>
      {children}
    </BalancesContext.Provider>
  );
};

export { BalancesProvider };
