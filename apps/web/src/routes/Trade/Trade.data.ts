import { PageTab } from "@mklem92/swyftx-classic-ui";

const TradeTabs = (code: string): PageTab[] => [
  { label: "Buy", path: `/trade/${code}/buy` },
  { label: "Sell", path: `/trade/${code}/sell` },
  { label: "Charts", path: `/trade/${code}/charts` },
  { label: "Orders", path: `/trade/${code}/orders` },
  { label: "Deposit", path: `/trade/${code}/deposit` },
  { label: "Withdraw", path: `/trade/${code}/withdraw` },
  { label: "Info", path: `/trade/${code}/info` },
];

export { TradeTabs };
