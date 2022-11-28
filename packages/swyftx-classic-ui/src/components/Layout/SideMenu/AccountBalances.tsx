import { useSwyftxClient } from "@mklem92/swyftx-api";
import { BrushOutlined, RefreshOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

const AccountBalances: React.FC = () => {
  const { client } = useSwyftxClient();

  return (
    <Stack paddingX={1}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography fontSize={12} fontWeight={500}>
          ACCOUNT BALANCES
        </Typography>
        <RefreshOutlined fontSize="small" />
        <BrushOutlined fontSize="small" />
      </Stack>
    </Stack>
  );
};

export { AccountBalances };
