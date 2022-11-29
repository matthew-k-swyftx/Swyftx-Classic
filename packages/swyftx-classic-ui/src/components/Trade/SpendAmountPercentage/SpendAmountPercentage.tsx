import React, { useState } from "react";
import { Button, ButtonGroup, Stack, Typography } from "@mui/material";

import { GetMarketAssetsResponse } from "@mklem92/swyftx-api";
import { useBalances } from "@mklem92/swyftx-logic";

type Props = {
  title?: string;
  asset?: GetMarketAssetsResponse;
  percentages?: number[];
};

const SpendAmountPercentage: React.FC<Props> = ({
  title,
  asset,
  percentages = [100, 75, 50, 25],
}) => {
  const balances = useBalances(asset);

  return (
    <Stack alignItems="center" spacing={1}>
      {title && (
        <Typography fontWeight={500} fontSize={16}>
          {title}
        </Typography>
      )}
      <Stack direction="row">
        <ButtonGroup>
          {percentages.map((percentage, index) => (
            <Button
              key={`${percentage}_${index}`}
              sx={{ paddingX: 3 }}
              variant="contained"
              disableElevation
            >
              {percentage}%
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export { SpendAmountPercentage };
