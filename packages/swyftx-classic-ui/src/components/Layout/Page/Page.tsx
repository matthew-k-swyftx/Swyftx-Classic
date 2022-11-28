import { Box, Fade, Slide, Stack, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { PageTab } from "./Page.types";
import { PageTabs } from "./PageTabs";

type Props = {
  label: string;
  tabs?: PageTab[];
  padding?: number;
};

const Page: React.FC<PropsWithChildren<Props>> = ({
  label,
  tabs,
  padding = 2,
  children,
}) => {
  return (
    <Stack spacing={0} width="100%">
      {label && (
        <Box padding={2} bgcolor="#0072ed">
          <Typography color="white" fontWeight={600}>
            {label}
          </Typography>
        </Box>
      )}
      {tabs && <PageTabs tabs={tabs} />}
      <Box padding={padding}>{children}</Box>
    </Stack>
  );
};

export { Page };
