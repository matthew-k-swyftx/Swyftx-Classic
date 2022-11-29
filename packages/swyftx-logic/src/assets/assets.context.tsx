import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

import { GetMarketAssetsResponse, useSwyftxClient } from "@mklem92/swyftx-api";

export const AssetsContext = React.createContext<GetMarketAssetsResponse[]>([]);

const AssetsProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [assets, setAssets] = useState<GetMarketAssetsResponse[]>([]);
  const { client } = useSwyftxClient();

  const getAssets = useCallback(async () => {
    const resp = await client.Markets.GetMarketAssets();
    setAssets(resp);
  }, [client]);

  useEffect(() => {
    getAssets();
  }, []);

  return (
    <AssetsContext.Provider value={assets}>{children}</AssetsContext.Provider>
  );
};

export { AssetsProvider };
