import { useCallback } from "react";
import { useBaseRequest } from "../common";
import {
  GetPairExchangeRateRequest,
  GetPairExchangeRateResponse,
  PlaceOrderRequest,
  PlaceOrderResponse,
} from "./Orders.types";

const useSwyftxOrders = (token?: string) => {
  const { post } = useBaseRequest(token);

  const GetPairExchangeRate = useCallback(
    (request: GetPairExchangeRateRequest) =>
      post<GetPairExchangeRateResponse>(`orders/rate/`, request),
    [post]
  );

  const PlaceOrder = useCallback(
    (request: PlaceOrderRequest) =>
      post<PlaceOrderResponse>(`orders/`, request),
    [post]
  );

  return {
    GetPairExchangeRate,
    PlaceOrder,
  };
};

export { useSwyftxOrders };
