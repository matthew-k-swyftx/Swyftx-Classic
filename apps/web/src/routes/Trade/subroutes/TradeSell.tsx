import React from "react";
import Big from "big.js";
import { useParams } from "react-router-dom";
import { Skeleton, Stack, Typography } from "@mui/material";
import { useAssets, useRates, useBalances } from "@mklem92/swyftx-logic";
import { AccountBalanceWalletOutlined } from "@mui/icons-material";

const TradeSell: React.FC = () => {
  const { code } = useParams();
  const asset = useAssets(code);
  const rate = useRates(asset);
  const balance = useBalances(asset);

  return (
    <Stack
      spacing={1}
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {!rate && <Skeleton variant="text" />}
        <Typography fontSize={28} fontWeight={600}>
          ${Number(rate?.bidPrice || 0).toLocaleString("en-AU")} AUD/
          {asset?.code}
        </Typography>
        <Typography
          fontSize={18}
          fontWeight={600}
          color={
            Big(rate?.dailyPriceChange || 0).gt(0)
              ? "success.light"
              : "error.light"
          }
        >
          {rate?.dailyPriceChange}%
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AccountBalanceWalletOutlined />
        <Typography>
          {balance?.availableBalance} {asset?.code}
        </Typography>
      </Stack>
    </Stack>
  );
};

export { TradeSell };
