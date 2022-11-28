import axios, { AxiosHeaders, AxiosResponse } from "axios";
import { useCallback } from "react";

const BASE_ROUTE_URL = "https://api.swyftx.com.au";
const DEMO_ROUTE_URL = "https://api.demo.swyftx.com.au";

const buildBaseUrl = (path: string) => `${BASE_ROUTE_URL}/${path}`;
const buildDemoUrl = (path: string) => `${DEMO_ROUTE_URL}/${path}`;
const buildHeaders = (accessToken?: string, auth: boolean = true) => {
  const headers: { [key: string]: string } = {};
  headers["Content-Type"] = "application/json";
  if (auth) headers["Authorization"] = `Bearer ${accessToken}`;

  return headers;
};

const useBaseRequest = (accessToken?: string) => {
  const get = useCallback(
    async <R>(path: string) => {
      const res = await axios.get<R>(buildBaseUrl(path), {
        headers: buildHeaders(accessToken),
      });
      return res.data;
    },
    [accessToken]
  );

  const post = useCallback(
    async <R, D = any>(path: string, data?: D, auth = true) => {
      const res = await axios.post<R, AxiosResponse<R, any>, D>(
        buildBaseUrl(path),
        data,
        {
          headers: buildHeaders(accessToken, auth),
        }
      );
      return res.data;
    },
    [accessToken]
  );

  return {
    get,
    post,
  };
};

const useDemoRequest = () => {};

export { buildBaseUrl, buildDemoUrl, buildHeaders, useBaseRequest };
