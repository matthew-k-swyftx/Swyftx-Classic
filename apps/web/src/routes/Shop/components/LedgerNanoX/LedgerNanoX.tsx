import React from "react";
import { Stack, Typography } from "@mui/material";
import { WalletOutlined } from "@mui/icons-material";

import { TitleCard } from "@mklem92/swyftx-classic-ui";

const LedgerNanoX: React.FC = () => (
  <TitleCard title="Ledger Nano X" icon={<WalletOutlined />}>
    <Stack
      alignItems="center"
      padding={1}
      justifyContent="center"
      bgcolor="#008080"
    >
      <Typography color="white" fontSize={14}>
        Recommended
      </Typography>
    </Stack>
  </TitleCard>
);

export { LedgerNanoX };
