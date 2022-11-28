import {
  GetMarketsDetailedInfoResponse,
  useSwyftxClient,
} from "@mklem92/swyftx-api";
import {
  BookOutlined,
  LanguageOutlined,
  Reddit,
  SearchOutlined,
  Twitter,
} from "@mui/icons-material";
import { Card, Chip, Grid, Link, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TradeInfoSkeleton } from "./TradeInfo.skeleton";

const TradeInfo: React.FC = () => {
  const { code } = useParams();
  const [details, setDetails] = useState<GetMarketsDetailedInfoResponse>();
  const { client } = useSwyftxClient();

  useEffect(() => {
    const getDetails = async () => {
      if (!code) return;

      const resp = await client.Markets.GetDetailedInfoForAsset(code);
      console.log(resp);
      if (resp) setDetails(resp[0]);
    };

    if (client && code) getDetails();
  }, []);

  if (!details) return <TradeInfoSkeleton />;

  return (
    <Stack spacing={1}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing={1}
        paddingX={1}
      >
        <Chip label={`Rank #${details.rank}`} size="small" />
        <Typography fontWeight={500} fontSize={28} padding={1}>
          {details.name}
        </Typography>
        {details.urls.website && (
          <Link href={details.urls.website}>
            <Chip
              icon={<LanguageOutlined />}
              size="small"
              label="Website"
              color="primary"
              sx={{ cursor: "pointer" }}
            />
          </Link>
        )}
        {details.urls.explorer && (
          <Link href={details.urls.explorer}>
            <Chip
              icon={<SearchOutlined />}
              size="small"
              label="Explorer"
              color="success"
              sx={{ cursor: "pointer" }}
            />
          </Link>
        )}
        {details.urls.reddit && (
          <Link href={details.urls.reddit} color="white" underline="none">
            <Chip
              icon={<Reddit color="inherit" />}
              size="small"
              label="Reddit"
              sx={{
                bgcolor: "#ff4500",
                color: "white",
                cursor: "pointer",
              }}
            />
          </Link>
        )}
        {details.urls.twitter && (
          <Link href={details.urls.twitter} color="white" underline="none">
            <Chip
              icon={<Twitter color="inherit" />}
              size="small"
              label="Twitter"
              sx={{
                bgcolor: "#1d9bf0",
                color: "white",
                cursor: "pointer",
              }}
            />
          </Link>
        )}
        {details.urls.techDoc && (
          <Link href={details.urls.techDoc}>
            <Chip
              icon={<BookOutlined />}
              size="small"
              label="Whitepaper"
              color="warning"
              sx={{ cursor: "pointer" }}
            />
          </Link>
        )}
      </Stack>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ padding: 1, width: "100%" }}>
            <Stack spacing={2} direction="row" alignItems="center">
              <Stack alignItems="center" justifyContent="center">
                <Typography fontWeight={600} fontSize={14}>
                  Circulating Supply
                </Typography>
                <Typography fontSize={12}>
                  {details.supply.circulating
                    ? details.supply.circulating.toLocaleString("en-AU")
                    : "N/A"}
                </Typography>
              </Stack>
              <Stack alignItems="center" justifyContent="center">
                <Typography fontWeight={600} fontSize={14}>
                  Total Supply
                </Typography>
                <Typography fontSize={12}>
                  {details.supply.total
                    ? details.supply.total.toLocaleString("en-AU")
                    : "N/A"}
                </Typography>
              </Stack>
              <Stack alignItems="center" justifyContent="center">
                <Typography fontWeight={600} fontSize={14}>
                  Max Supply
                </Typography>
                <Typography fontSize={12}>
                  {details.supply.max
                    ? details.supply.max.toLocaleString("en-AU")
                    : "N/A"}
                </Typography>
              </Stack>
              <Stack alignItems="center" justifyContent="center">
                <Typography fontWeight={600} fontSize={14}>
                  24H Trade Volume
                </Typography>
                <Typography fontSize={12}>
                  ${details.volume["24H"].toLocaleString("en-AU")}
                </Typography>
              </Stack>
              <Stack alignItems="center" justifyContent="center">
                <Typography fontWeight={600} fontSize={14}>
                  7D Change
                </Typography>
                <Typography fontSize={12}>
                  {details.priceChange.week}%
                </Typography>
              </Stack>
              <Stack alignItems="center" justifyContent="center">
                <Typography fontWeight={600} fontSize={14}>
                  30D Change
                </Typography>
                <Typography fontSize={12}>
                  {details.priceChange.month}%
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ padding: 1 }}>
            <Stack spacing={1}>
              <Typography fontWeight={500} fontSize={20}>
                Description
              </Typography>
              <Typography
                fontSize={14}
                dangerouslySetInnerHTML={{ __html: details.description || "" }}
              />
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export { TradeInfo };
