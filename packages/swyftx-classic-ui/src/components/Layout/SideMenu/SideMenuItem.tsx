import React, { useMemo } from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

type Props = {
  label: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
};

const SideMenuItem: React.FC<Props> = ({ label, icon, active, onClick }) => {
  const bgcolor = useMemo(() => (active ? "#56b8ff" : ""), [active]);
  return (
    <Stack
      direction="row"
      onClick={onClick}
      bgcolor={bgcolor}
      padding={1}
      paddingY={1.5}
      borderRadius={1}
      spacing={1}
      alignItems="center"
      sx={{
        cursor: "pointer",
        "&:hover": {
          bgcolor: active ? "#33a0ef" : "#414553",
        },
      }}
    >
      {icon}
      <Typography fontSize={12}>{label}</Typography>
    </Stack>
  );
};

export { SideMenuItem };
