import { useCallback } from "react";
import { useBaseRequest } from "../common";
import { GetProfileResponse } from "./Account.types";

const useSwyftxAccount = (token?: string) => {
  const { get } = useBaseRequest(token);

  const GetProfile = useCallback(() => get<GetProfileResponse>("user/"), [get]);

  return {
    GetProfile,
  };
};

export { useSwyftxAccount };
