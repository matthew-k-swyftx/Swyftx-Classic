import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { MarketTicker, SideMenu } from "@mklem92/swyftx-classic-ui";
import { useSwyftxClient } from "@mklem92/swyftx-api";
import { RouterProvider, Routes, useRoutes } from "react-router-dom";
import { router } from "./routes";

const App = () => {
  const [response, setResponse] = useState<any>();
  const { client } = useSwyftxClient();
  const routes = useRoutes(router);

  useEffect(() => {
    const getProfile = async () => {
      setResponse(await client.Account.GetProfile());
    };

    getProfile();
  }, []);

  return <>{routes}</>;
};

export default App;
