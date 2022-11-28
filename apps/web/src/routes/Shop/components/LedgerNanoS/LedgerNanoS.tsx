import React from "react";
import { Typography } from "@mui/material";
import { WalletOutlined } from "@mui/icons-material";

import { TitleCard } from "@mklem92/swyftx-classic-ui";

const LedgerNanoS: React.FC = () => (
  <TitleCard title="Ledger Nano S" icon={<WalletOutlined />}>
    <Typography>Welcome</Typography>
  </TitleCard>
);

export { LedgerNanoS };
