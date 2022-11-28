import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  AirplanemodeActiveOutlined,
  WalletOutlined,
} from "@mui/icons-material";

import { TitleCard } from "@mklem92/swyftx-classic-ui";
import { LedgerNanoType } from "../Shop.data";

type Props = {
  ledger: LedgerNanoType;
};

const LedgerNano: React.FC<Props> = ({ ledger }) => (
  <TitleCard title={ledger.title} icon={<WalletOutlined />}>
    {ledger.recommended && (
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
    )}
    <Stack direction="row" alignItems="flex-start" height="100%">
      <Stack direction="row" alignItems="center" width="100%" marginTop={1}>
        {ledger.imageUrl && (
          <Box component="img" src={ledger.imageUrl} width="80px" padding={2} />
        )}
        <Stack padding={2} spacing={1} alignItems="center">
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography fontSize={24} fontWeight={500}>
              {ledger.price}
            </Typography>
            <Typography fontSize={12}>Inc GST</Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <AirplanemodeActiveOutlined />
            <Typography whiteSpace="nowrap" fontSize={12}>
              {ledger.shipping}
            </Typography>
          </Stack>

          <Button
            variant="contained"
            disableElevation
            size="small"
            onClick={() => window.open(ledger.buyUrl, "_blank")}
          >
            Buy
          </Button>
        </Stack>
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Stack alignItems="flex-start" spacing={1} width="100%">
        <Box paddingX={2} paddingTop={2} paddingBottom={1}>
          <Typography fontSize={18} fontWeight={500}>
            Description
          </Typography>
          <Typography fontSize={12}>{ledger.description}</Typography>
        </Box>
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          sx={{ width: "100%" }}
        />
        <Box paddingX={2} paddingBottom={2}>
          <Typography fontSize={18} fontWeight={500}>
            Features
          </Typography>
          <Box
            component="ul"
            paddingX={1.5}
            marginTop={0.5}
            sx={{ li: { paddingBottom: 0.5 } }}
          >
            {ledger.features.map((feature) => (
              <Typography component="li" fontSize={12}>
                {feature}
              </Typography>
            ))}
          </Box>
        </Box>
      </Stack>
    </Stack>
  </TitleCard>
);

export { LedgerNano };
