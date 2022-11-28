import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { WalletOutlined } from "@mui/icons-material";

import { TitleCard } from "@mklem92/swyftx-classic-ui";

const HardwareWallet: React.FC = () => (
  <TitleCard title="Hardware Wallets" icon={<WalletOutlined />}>
    <Stack
      direction="row"
      width="100%"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Stack padding={2} spacing={1} width="100%">
        <Typography fontWeight={600} fontSize={16}>
          What is a hardware wallet?
        </Typography>
        <Typography fontSize={14}>
          A hardware wallet is a secure storage device that is built and
          designed to assist you in protecting and managing your own crypto
          currencies. They do this by encrypting your wallet keys and providing
          a simple and intuitive user interface for managing your favourite
          crypto wallets. We recommend the Ledger Nano S or Ledger Nano X
        </Typography>
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Stack padding={2} spacing={1} width="100%">
        <Typography fontWeight={600} fontSize={16}>
          Do I need a hardware wallet?
        </Typography>
        <Typography fontSize={14}>
          It&apos;s a common saying in the crypto world &quot;Not your Keys, Not
          your Crypto&quot; - essentially suggesting that if you&apos;re long
          term investing in crypto currencies you should store them within your
          control,rather than with an exchange or hosted wallet. While we do
          everything to maintain the security of customers&apos; accounts,
          keeping your holdings in a hardware wallet is an excellent additional
          step to securing your crypto.
        </Typography>
      </Stack>
    </Stack>
  </TitleCard>
);

export { HardwareWallet };
