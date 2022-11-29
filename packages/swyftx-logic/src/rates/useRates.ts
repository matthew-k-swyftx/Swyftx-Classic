import { GetMarketAssetsResponse, LiveRate } from "@mklem92/swyftx-api";
import { useCallback, useContext } from "react";
import { RatesContext } from "./rates.context";

const useRates = (asset?: GetMarketAssetsResponse) => {
  const rates = useContext(RatesContext);

  const getRateByAssetId = useCallback((): LiveRate | undefined => {
    if (!asset?.id || !rates) return undefined;
    return rates[Number(asset.id)];
  }, [asset?.id, rates]);

  return getRateByAssetId();
};

export { useRates };
