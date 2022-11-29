import React, { useState } from "react";
import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { tradeTypeData, TradeTypes } from "./TradeType.data";

type Props = {
  types: TradeTypes[];
};

const TradeType: React.FC<Props> = ({ types }) => {
  const [value, setValue] = useState<TradeTypes>();

  return (
    <Stack direction="row">
      <ButtonGroup>
        {types.map((type) => (
          <Button
            key={type}
            sx={{ width: "25%", paddingX: 3 }}
            variant="contained"
            onClick={() => setValue(type)}
            color={value === type ? "primary" : "inherit"}
            disableElevation
          >
            <Stack alignItems="center" justifyContent="center" spacing={1}>
              {tradeTypeData[type].icon}
              <Typography fontWeight={500} fontSize={14}>
                {type}
              </Typography>
            </Stack>
          </Button>
        ))}
      </ButtonGroup>
    </Stack>
  );
};

export { TradeType };
