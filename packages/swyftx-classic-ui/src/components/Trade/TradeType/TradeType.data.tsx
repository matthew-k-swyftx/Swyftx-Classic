import {
  ShoppingBagOutlined,
  AttachMoneyOutlined,
  RestoreOutlined,
  PanToolOutlined,
} from "@mui/icons-material";

export enum TradeTypes {
  Market = "Market",
  Limit = "Limit",
  Stop = "Stop",
  Recurring = "Recurring",
}

export type TradeTypeData = {
  icon: any;
};

export const tradeTypeData: { [key in TradeTypes]: TradeTypeData } = {
  [TradeTypes.Market]: {
    icon: <ShoppingBagOutlined />,
  },
  [TradeTypes.Limit]: {
    icon: <AttachMoneyOutlined />,
  },
  [TradeTypes.Stop]: {
    icon: <PanToolOutlined />,
  },
  [TradeTypes.Recurring]: {
    icon: <RestoreOutlined />,
  },
};
