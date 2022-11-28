import { Box, Card, Stack, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

type Props = {
  title: string;
  icon?: any;
};

const TitleCard: React.FC<PropsWithChildren<Props>> = ({
  title,
  icon,
  children,
}) => {
  return (
    <Card sx={{ padding: 0, overflow: "hidden", height: "100%" }}>
      <Stack
        direction="row"
        alignItems="center"
        bgcolor="#0072ed"
        padding={2}
        spacing={1}
        color="white"
      >
        {icon}
        <Typography color="white" fontWeight={600}>
          {title}
        </Typography>
      </Stack>
      <Box>{children}</Box>
    </Card>
  );
};

export { TitleCard };
