import React, { useEffect, useState } from "react";
import { Box, Card, InputBase, Stack, Typography } from "@mui/material";
import { GetMarketAssetsResponse } from "@mklem92/swyftx-api";
import { useBalances } from "@mklem92/swyftx-logic";

type Props = {
  asset?: GetMarketAssetsResponse;
  title?: string;
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
};

const TradeInput: React.FC<Props> = ({
  asset,
  title,
  value,
  onChange,
  onFocus,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const balances = useBalances(asset);

  useEffect(() => {
    if (focused && onFocus) onFocus();
  }, [focused, onFocus]);

  return (
    <Stack spacing={1}>
      <Typography fontWeight={600} fontSize={14}>
        {title}
      </Typography>
      <Card
        variant="outlined"
        sx={{
          borderColor: focused ? "primary.main" : "divider",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          height="45px"
        >
          <Box
            bgcolor="#ebf4f9"
            height="45px"
            width="45px"
            borderRight="1px solid"
            borderColor="divider"
          ></Box>
          <Stack
            padding={0.5}
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <InputBase
              placeholder="0.00000000"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              sx={{
                input: {
                  textAlign: "right",
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "Ropa Sans !important",
                },
              }}
            />
            <Typography color="text.secondary" fontWeight={400}>
              {asset?.code}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export { TradeInput };
