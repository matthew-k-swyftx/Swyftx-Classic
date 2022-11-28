import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  AirplanemodeActiveOutlined,
  WalletOutlined,
} from "@mui/icons-material";

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
    <Stack direction="row" alignItems="flex-start" height="100%">
      <Stack direction="row" alignItems="center" width="100%" marginTop={1}>
        <Box
          component="img"
          src="/ledger_nano_x.webp"
          width="80px"
          padding={2}
        />
        <Stack padding={2} spacing={1} alignItems="center">
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography fontSize={24} fontWeight={500}>
              A$249
            </Typography>
            <Typography fontSize={12}>Inc GST</Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <AirplanemodeActiveOutlined />
            <Typography whiteSpace="nowrap" fontSize={12}>
              Free Shipping (14 - 21 days)
            </Typography>
          </Stack>

          <Button
            variant="contained"
            disableElevation
            size="small"
            onClick={() =>
              window.open(
                "https://shop.ledger.com/products/ledger-nano-x/onyx-black",
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
            The next level hardware wallet: securely manage your crypto,
            anywhere you go. The Ledger Nano X combines ease-of-use and
            flexibility while ensuring the highest standard of crypto security.
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
              USB Type C + Bluetooth Connectivity
            </Typography>

            <Typography component="li" fontSize={12}>
              100mAh battery
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

export { LedgerNanoX };
