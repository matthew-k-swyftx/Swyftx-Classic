import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  LiveRateAsset,
  LiveRatesResponse,
  useSwyftxClient,
} from "@mklem92/swyftx-api";
import { useInterval } from "react-use";
import { useUser } from "../user";

export const RatesContext = React.createContext<LiveRatesResponse>({});

const RatesProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { user } = useUser();
  const [rates, setRates] = useState<LiveRatesResponse>({});
  const { client } = useSwyftxClient();

  const getRates = useCallback(async () => {
    const resp = await client.Markets.GetLiveRates(
      user?.currency.id || LiveRateAsset.AUD
    );
    setRates(resp);
  }, [client, user?.currency.id]);

  useEffect(() => {
    getRates();
  }, [user?.currency.id]);

  useInterval(getRates, 5000);

  return (
    <RatesContext.Provider value={rates}>{children}</RatesContext.Provider>
  );
};

export { RatesProvider };
