import { useCallback } from "react";
import { useBaseRequest } from "../common";
import {
  GetProfileBalancesResponse,
  GetProfileResponse,
} from "./Account.types";

const useSwyftxAccount = (token?: string) => {
  const { get } = useBaseRequest(token);

  const GetProfile = useCallback(() => get<GetProfileResponse>("user/"), [get]);

  const GetBalances = useCallback(
    () => get<GetProfileBalancesResponse[]>("user/balance/"),
    [get]
  );

  return {
    GetProfile,
    GetBalances,
  };
};

export { useSwyftxAccount };
