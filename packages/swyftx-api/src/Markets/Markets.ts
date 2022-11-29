import { useCallback } from "react";
import { useBaseRequest } from "../common";
import {
  GetMarketAssetsResponse,
  GetMarketsBasicInfoResponse,
  GetMarketsDetailedInfoResponse,
  LiveRateAsset,
  LiveRatesResponse,
} from "./Markets.types";

const useSwyftxMarkets = (token?: string) => {
  const { get } = useBaseRequest(token);

  const GetLiveRates = useCallback(
    (asset: LiveRateAsset) => get<LiveRatesResponse>(`live-rates/${asset}/`),
    [get]
  );

  const GetMarketAssets = useCallback(
    () => get<GetMarketAssetsResponse[]>("markets/assets/"),
    [get]
  );

  const GetBasicInfo = useCallback(
    (assetCode?: string) =>
      get<GetMarketsBasicInfoResponse[]>(`markets/info/basic/`),
    [get]
  );

  const GetDetailedInfo = useCallback(
    () => get<GetMarketsDetailedInfoResponse[]>(`markets/info/detail/`),
    [get]
  );

  const GetDetailedInfoForAsset = useCallback(
    (assetCode: string) =>
      get<GetMarketsDetailedInfoResponse[]>(
        `markets/info/detail/${assetCode}/`
      ),
    [get]
  );

  return {
    GetMarketAssets,
    GetLiveRates,
    GetBasicInfo,
    GetDetailedInfo,
    GetDetailedInfoForAsset,
  };
};

export { useSwyftxMarkets };
