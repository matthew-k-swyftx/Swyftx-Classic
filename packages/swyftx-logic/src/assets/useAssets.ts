import { GetMarketAssetsResponse } from "@mklem92/swyftx-api";
import { useCallback, useContext } from "react";
import { AssetsContext } from "./assets.context";

const useAssets = (assetCode?: string) => {
  const assets = useContext(AssetsContext);

  const getAsset = useCallback((): GetMarketAssetsResponse | undefined => {
    return assets.find((a) => a.code === assetCode);
  }, [assetCode, assets]);

  return getAsset();
};

export { useAssets };
