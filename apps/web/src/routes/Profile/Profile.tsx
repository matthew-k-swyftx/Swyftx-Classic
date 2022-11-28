import React from "react";
import { Typography } from "@mui/material";
import { Page } from "@mklem92/swyftx-classic-ui";
import { ProfileTabs } from "./Profile.data";

const Profile: React.FC = () => {
  return (
    <Page label="Welcome to your account, Matthew" tabs={ProfileTabs}>
      <Typography>TODO Profile</Typography>
    </Page>
  );
};

export { Profile };
