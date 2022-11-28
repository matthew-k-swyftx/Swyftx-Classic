import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

import { SideMenuItem } from "./SideMenuItem";
import { PowerOffOutlined } from "@mui/icons-material";
import { AccountBalances } from "./AccountBalances";
import { sideMenuItems } from "./SideMenu.data";

type Props = {
  logoSrc: string;
};

const SideMenu: React.FC<Props> = ({ logoSrc }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Stack
      width="225px"
      alignItems="space-between"
      height="100%"
      bgcolor="#2e323f"
      color="white"
      spacing={0}
    >
      <Stack
        direction="row"
        alignItems="center"
        paddingY={1}
        paddingBottom={3}
        paddingX={2}
      ></Stack>

      <Box height="calc(100% - 45px)" sx={{ overflowY: "auto" }}>
        <Stack spacing={1} padding={1} paddingBottom={2}>
          <Typography fontSize={12} paddingX={1} fontWeight={500}>
            GENERAL
          </Typography>
          {sideMenuItems.map(({ label, icon, path }) => (
            <SideMenuItem
              key={label}
              onClick={() => navigate(path)}
              label={label}
              icon={icon}
              active={path ? location.pathname.includes(path) : false}
            />
          ))}
          <AccountBalances />
        </Stack>
      </Box>
      <Stack
        width="100%"
        direction="row"
        bgcolor="#232730"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <PowerOffOutlined fontSize="small" />
        <Button color="inherit" sx={{ fontSize: "12px", height: "45px" }}>
          Logout
        </Button>
      </Stack>
    </Stack>
  );
};

export { SideMenu };
