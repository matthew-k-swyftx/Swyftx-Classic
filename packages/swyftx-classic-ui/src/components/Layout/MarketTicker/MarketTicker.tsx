import { Card, Stack, Typography } from "@mui/material";
import React from "react";

const MarketTicker: React.FC = () => {
  return (
    <Card
      variant="outlined"
      elevation={0}
      sx={{ height: "65px", position: "sticky", top: 0 }}
    >
      <Stack alignItems="center" justifyContent="center" height="100%">
        <Typography>Market Ticker</Typography>
      </Stack>
    </Card>
  );
};

export { MarketTicker };
