import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  AirplanemodeActiveOutlined,
  WalletOutlined,
} from "@mui/icons-material";

import { TitleCard } from "@mklem92/swyftx-classic-ui";

const LedgerNanoSPlus: React.FC = () => (
  <TitleCard title="Ledger Nano S Plus" icon={<WalletOutlined />}>
    <Stack direction="row" alignItems="center" height="100%">
      <Stack direction="row" alignItems="center" width="100%" marginTop={1}>
        <Box
          component="img"
          src="/ledger_nano_s_plus.webp"
          width="80px"
          padding={2}
        />
        <Stack padding={2} spacing={1} alignItems="center">
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography fontSize={24} fontWeight={500}>
              A$129
            </Typography>
            <Typography fontSize={12}>Inc GST</Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <AirplanemodeActiveOutlined />
            <Typography whiteSpace="nowrap" fontSize={12}>
              ~$25 Shipping (14 - 21 days)
            </Typography>
          </Stack>

          <Button
            variant="contained"
            disableElevation
            size="small"
            onClick={() =>
              window.open(
                "https://shop.ledger.com/products/ledger-nano-s-plus/matte-black",
                "_blank"
              )
            }
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
          <Typography fontSize={12}>
            Secure your assets and explore Web3 with the new Ledger Nano S Plus.
            Take the iconic Ledger Nano S, then make it DeFi and NFT-friendly.
          </Typography>
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
            <Typography component="li" fontSize={12}>
              Up-to 100 wallet apps at once
            </Typography>

            <Typography component="li" fontSize={12}>
              USB Type C
            </Typography>

            <Typography component="li" fontSize={12}>
              No battery
            </Typography>

            <Typography component="li" fontSize={12}>
              128 x 64 pixel screen
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  </TitleCard>
);

export { LedgerNanoSPlus };
