import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import { PageTab } from "./Page.types";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  tabs: PageTab[];
};

const PageTabs: React.FC<Props> = ({ tabs }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Card variant="outlined">
      <Stack spacing={2} direction="row">
        {tabs.map((tab) => {
          const active = location.pathname.includes(tab.path);
          return (
            <Box
              key={tab.path}
              onClick={() => navigate(tab.path)}
              borderBottom={active ? "2px solid #0072ed" : ""}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                padding={2}
                fontSize={12}
                fontWeight={500}
                color={active ? "text.primary" : "text.secondary"}
              >
                {tab.label.toUpperCase()}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Card>
  );
};

export { PageTabs };
