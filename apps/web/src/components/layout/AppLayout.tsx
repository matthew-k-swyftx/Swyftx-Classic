import { MarketTicker, SideMenu } from "@mklem92/swyftx-classic-ui";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <Grid
      container
      height="100%"
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Grid item height="100%" width="225px">
        <SideMenu logoSrc="/logo-white.svg" />
      </Grid>
      <Grid item width="calc(100% - 225px)">
        <Stack spacing={0}>
          <MarketTicker />
          <Box height="calc(100vh - 67px)" sx={{ overflowY: "auto" }}>
            <Outlet />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export { AppLayout };
