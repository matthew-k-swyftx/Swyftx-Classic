import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { MarketTicker, SideMenu } from "@mklem92/swyftx-classic-ui";
import { useSwyftxClient } from "@mklem92/swyftx-api";
import { useRoutes } from "react-router-dom";
import { router } from "./routes";

const App = () => {
  const routes = useRoutes(router);

  return routes;
};

export default App;
