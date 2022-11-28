import React from "react";
import { Stack, Typography } from "@mui/material";
import { MeetingRoomOutlined, StorefrontOutlined } from "@mui/icons-material";

import { TitleCard } from "@mklem92/swyftx-classic-ui";

const Welcome: React.FC = () => (
  <TitleCard title="Welcome" icon={<MeetingRoomOutlined />}>
    <Stack padding={2} direction="row" spacing={2}>
      <StorefrontOutlined sx={{ fontSize: "160px" }} />
      <Stack spacing={1}>
        <Typography fontWeight={600} fontSize={20}>
          Welcome to the Online Shop
        </Typography>
        <Typography fontSize={14}>
          The shop is a safe, secure, convenient and fast way to get your hands
          on some popular crypto currency products. We&apos;ve vetted leading
          crypto currency brands, with the goal in mind of bringing everything
          you need related to crypto currency into the one simple place! You can
          expect fast shipping great support & competitive prices on all the
          items listed.
        </Typography>
      </Stack>
    </Stack>
  </TitleCard>
);

export { Welcome };
