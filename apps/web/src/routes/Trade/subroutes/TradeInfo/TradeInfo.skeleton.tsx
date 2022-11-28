import React from "react";
import {
  BookOutlined,
  LanguageOutlined,
  Reddit,
  SearchOutlined,
  Twitter,
} from "@mui/icons-material";
import { Card, Grid, Link, Skeleton, Stack, Typography } from "@mui/material";

const TradeInfoSkeleton: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Skeleton variant="text" sx={{ padding: 1 }} width="300px" />

        <Card variant="outlined" sx={{ padding: 1, width: "100%" }}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Stack alignItems="center" justifyContent="center">
              <Typography fontWeight={600} fontSize={14}>
                Global Rank
              </Typography>
              <Skeleton variant="text" width="20px" />
            </Stack>
            <Stack alignItems="center" justifyContent="center">
              <Typography fontWeight={600} fontSize={14}>
                Circulating Supply
              </Typography>
              <Skeleton variant="text" width="60px" />
            </Stack>
            <Stack alignItems="center" justifyContent="center">
              <Typography fontWeight={600} fontSize={14}>
                Total Supply
              </Typography>
              <Skeleton variant="text" width="60px" />
            </Stack>
            <Stack alignItems="center" justifyContent="center">
              <Typography fontWeight={600} fontSize={14}>
                Max Supply
              </Typography>
              <Skeleton variant="text" width="60px" />
            </Stack>
            <Stack alignItems="center" justifyContent="center">
              <Typography fontWeight={600} fontSize={14}>
                24H Trade Volume
              </Typography>
              <Skeleton variant="text" width="60px" />
            </Stack>
            <Stack alignItems="center" justifyContent="center">
              <Typography fontWeight={600} fontSize={14}>
                7D Change
              </Typography>
              <Skeleton variant="text" width="60px" />
            </Stack>
            <Stack alignItems="center" justifyContent="center">
              <Typography fontWeight={600} fontSize={14}>
                30D Change
              </Typography>
              <Skeleton variant="text" width="60px" />
            </Stack>
          </Stack>
        </Card>
      </Stack>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ padding: 1 }}>
            <Stack spacing={1}>
              <Typography fontWeight={500} fontSize={20}>
                Description
              </Typography>
              <Skeleton variant="rectangular" height="200px" />
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ padding: 1 }}>
            <Stack spacing={2}>
              <Typography fontWeight={500} fontSize={20}>
                Links
              </Typography>
              <Stack direction="row" spacing={4}>
                <Stack alignItems="center" justifyContent="center" spacing={1}>
                  <Skeleton variant="rectangular" width="30px" height="30px" />
                  <Skeleton variant="text" width="50px" />
                </Stack>
                <Stack alignItems="center" justifyContent="center" spacing={1}>
                  <Skeleton variant="rectangular" width="30px" height="30px" />
                  <Skeleton variant="text" width="50px" />
                </Stack>

                <Stack alignItems="center" justifyContent="center" spacing={1}>
                  <Skeleton variant="rectangular" width="30px" height="30px" />
                  <Skeleton variant="text" width="50px" />
                </Stack>

                <Stack alignItems="center" justifyContent="center" spacing={1}>
                  <Skeleton variant="rectangular" width="30px" height="30px" />
                  <Skeleton variant="text" width="50px" />
                </Stack>

                <Stack alignItems="center" justifyContent="center" spacing={1}>
                  <Skeleton variant="rectangular" width="30px" height="30px" />
                  <Skeleton variant="text" width="50px" />
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export { TradeInfoSkeleton };
