import { useCallback, useContext } from "react";
import {
  GetMarketAssetsResponse,
  GetProfileBalancesResponse,
} from "@mklem92/swyftx-api";
import { BalancesContext } from "./balances.context";

const useBalances = (asset?: GetMarketAssetsResponse) => {
  const balances = useContext(BalancesContext);

  const getBalanceByAssetId = useCallback(():
    | Omit<GetProfileBalancesResponse, "assetId">
    | undefined => {
    if (!asset?.id || !balances) return undefined;
    return balances[Number(asset.id)];
  }, [asset?.id, balances]);

  return getBalanceByAssetId();
};

export { useBalances };
