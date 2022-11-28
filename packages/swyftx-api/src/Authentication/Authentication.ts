import {
  GetKeysResponse,
  GetScopeResponse,
  LogoutResponse,
  RefreshAccessTokenData,
  RefreshAccessTokenResponse,
  RevokeKeyData,
  RevokeKeyResponse,
} from "./Authentication.types";
import { useBaseRequest } from "../common";
import { useCallback } from "react";

const useSwyftxAuthentication = (token?: string) => {
  const { post, get } = useBaseRequest(token);

  /**
   * Generates a new JWT using an API Key.
   * @returns {RefreshAccessTokenResponse}
   */
  const RefreshAccessToken = useCallback(
    (apiKey: string) => {
      const url = "auth/refresh/";
      const data: RefreshAccessTokenData = { apiKey };
      return post<RefreshAccessTokenResponse, RefreshAccessTokenData>(
        url,
        data,
        false
      );
    },
    [post]
  );

  /**
   * This will invalidate the current access token, a new one can be generated with your API Key.
   * @returns {LogoutResponse}
   */
  const Logout = useCallback(() => post<LogoutResponse>("auth/logout"), [post]);

  const GetScope = useCallback(
    () => get<GetScopeResponse>("user/apiKeys/scope/"),
    [get]
  );

  const GetKeys = useCallback(
    () => get<GetKeysResponse[]>("user/apiKeys/"),
    [get]
  );

  const RevokeKey = useCallback(
    (keyId: string) => {
      const url = "user/apiKeys/revoke/";
      const data: RevokeKeyData = { keyId };

      return post<RevokeKeyResponse, RevokeKeyData>(url, data);
    },
    [post]
  );

  const RevokeAllKeys = useCallback(
    () => post<RevokeKeyResponse>("user/apiKeys/revokeAll/"),
    [post]
  );

  return {
    RefreshAccessToken,
    Logout,
    GetScope,
    GetKeys,
    RevokeKey,
    RevokeAllKeys,
  };
};

export { useSwyftxAuthentication };
