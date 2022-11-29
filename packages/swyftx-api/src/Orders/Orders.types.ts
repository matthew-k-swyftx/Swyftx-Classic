export type GetPairExchangeRateRequest = {
  buy: string;
  sell: string;
  amount: string;
  limit: string;
};

export type GetPairExchangeRateResponse = {
  amount: string;
  feePerUnit: string;
  price: string;
  total: string;
};

export enum OrderType {
  MARKET_BUY = 1,
  MARKET_SELL = 2,
  LIMIT_BUY = 3,
  LIMIT_SELL = 4,
  STOP_LIMIT_BUY = 5,
  STOP_LIMIT_SELL = 6,
}

export type PlaceOrderRequest = {
  primary: string;
  secondary: string;
  quantity: string;
  assetQuantity: string;
  orderType: OrderType;
  trigger: string;
};

export type Order = {
  order_type: OrderType;
  primary_asset: number;
  secondary_asset: number;
  quantity_asset: number;
  quantity: number;
  trigger: number;
  status: number;
  created_time: number;
  updated_time: number;
  amount: number;
  total: number;
  rate: number;
  aud_value: number;
  swyftxValue: number;
  userCountryValue: number;
};

export type PlaceOrderResponse = {
  orderUuid: string;
  order: Order;
  processed: boolean;
};
