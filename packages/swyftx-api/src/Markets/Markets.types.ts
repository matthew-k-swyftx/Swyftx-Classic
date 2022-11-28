export enum LiveRateAsset {
  AUD = 1,
  BTC = 3,
  USD = 36,
}

export type Profile = {
  dob: number;
};

export type GetMarketAssetsResponse = {
  id: string;
  name: string;
  code: string;
  minimum_order: string;
  price_scale: number;
  deposit_enabled: boolean;
  withdraw_enabled: boolean;
  min_confirmations: number;
  min_withdrawal: number;
  minimum_order_increment: number;
  mining_fee: number;
  primary: boolean;
  secondary: boolean;
};

export type GetMarketsBasicInfoResponse = {
  name: string;
  altName: string;
  code: string;
  id: number;
  rank: number;
  buy: string;
  sell: string;
  spread: string;
  volume24H: number;
  marketCap: number;
};

export type MarketsDetailedVolume = {
  "24H": number;
  "1W": number;
  "1M": number;
  marketCap: number;
};

export type MarketDetailedUrls = {
  website: string;
  twitter: string;
  reddit: string;
  techDoc: string;
  explorer: string;
};

export type MarketDetailedSupply = {
  circulating: number;
  total: number;
  max: number;
};

export type MarketDetailedPriceChange = {
  month: number;
  week: number;
};

export type GetMarketsDetailedInfoResponse = {
  name: string;
  id: number;
  description: string;
  category: string;
  mineable: number;
  spread: string;
  rank: number;
  priceChange: MarketDetailedPriceChange;
  rankSuffix: string;
  volume: MarketsDetailedVolume;
  urls: MarketDetailedUrls;
  supply: MarketDetailedSupply;
};
