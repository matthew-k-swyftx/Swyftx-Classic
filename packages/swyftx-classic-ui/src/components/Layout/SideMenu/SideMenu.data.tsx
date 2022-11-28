import {
  CalculateOutlined,
  FormatListNumberedOutlined,
  HelpCenter,
  Inventory2Outlined,
  MoveToInboxOutlined,
  OutboxOutlined,
  PersonOutlined,
  RestorePageOutlined,
  ShoppingCartOutlined,
  SpeedOutlined,
  SwapHorizOutlined,
} from "@mui/icons-material";

export type SideMenuItem = {
  label: string;
  icon: any;
  path: string;
};

const sideMenuItems: SideMenuItem[] = [
  {
    label: "Dashboard",
    icon: <SpeedOutlined fontSize="small" />,
    path: "/dashboard",
  },
  {
    label: "Trade",
    icon: <SwapHorizOutlined fontSize="small" />,
    path: "/trade",
  },
  {
    label: "Profile",
    icon: <PersonOutlined fontSize="small" />,
    path: "/profile",
  },
  {
    label: "Shop",
    icon: <ShoppingCartOutlined fontSize="small" />,
    path: "/shop",
  },
  {
    label: "Quick Deposit",
    icon: <MoveToInboxOutlined fontSize="small" />,
    path: "/trade/AUD/deposit",
  },
  {
    label: "Quick Withdraw",
    icon: <OutboxOutlined fontSize="small" />,
    path: "/trade/AUD/withdraw",
  },
  {
    label: "Order History",
    icon: <CalculateOutlined fontSize="small" />,
    path: "/order-history",
  },
  {
    label: "Recurring Orders",
    icon: <RestorePageOutlined fontSize="small" />,
    path: "/recurring-orders",
  },
  {
    label: "Bundles",
    icon: <Inventory2Outlined fontSize="small" />,
    path: "/bundles",
  },
  {
    label: "Asset List",
    icon: <FormatListNumberedOutlined fontSize="small" />,
    path: "/asset-list",
  },
  {
    label: "Help",
    icon: <HelpCenter fontSize="small" />,
    path: "/help",
  },
];

export { sideMenuItems };
