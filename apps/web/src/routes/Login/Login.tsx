import React from "react";
import { OutlinedInput, Stack } from "@mui/material";

const Login: React.FC = () => {
  return (
    <Stack padding={1} spacing={1}>
      <OutlinedInput placeholder="Access Token" />
      <OutlinedInput placeholder="API Key" />
    </Stack>
  );
};

export { Login };
