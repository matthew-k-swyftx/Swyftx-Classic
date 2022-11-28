import React, { PropsWithChildren, useMemo } from "react";
import { Typography } from "@mui/material";
import { Page } from "@mklem92/swyftx-classic-ui";
import { TradeTabs } from "./Trade.data";
import { Outlet, useParams } from "react-router-dom";

const Trade: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { code } = useParams();

  const tabs = useMemo(() => (code ? TradeTabs(code) : undefined), [code]);

  return (
    <Page label="Trade" tabs={tabs}>
      <Outlet />
    </Page>
  );
};

export { Trade };
