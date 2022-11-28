import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InfoOutlined,
  InfoRounded,
  MoveToInboxRounded,
  OutboxRounded,
  StackedLineChart,
} from "@mui/icons-material";
import Big from "big.js";
import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { Page } from "@mklem92/swyftx-classic-ui";
import {
  GetMarketsBasicInfoResponse,
  useSwyftxClient,
} from "@mklem92/swyftx-api";

const AssetList: React.FC = () => {
  const [assets, setAssets] = useState<GetMarketsBasicInfoResponse[]>();
  const { client } = useSwyftxClient();
  const navigate = useNavigate();

  useEffect(() => {
    const getAssets = async () => {
      let resp = await client.Markets.GetBasicInfo();

      setAssets(
        resp.filter((a) => a.rank !== null).sort((a, b) => a.rank - b.rank)
      );
    };

    if (client) getAssets();
  }, []);

  return (
    <Page label="Asset List" padding={0}>
      {assets && (
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Asset</TableCell>
                <TableCell align="right">Rank</TableCell>
                <TableCell align="right">Buy</TableCell>
                <TableCell align="right">Sell</TableCell>
                <TableCell align="right">Spread</TableCell>
                <TableCell align="right">Market Cap</TableCell>
                <TableCell align="right">Volume (24H)</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="right">{row.rank}</TableCell>
                  <TableCell align="right">
                    $
                    {Big(row.buy || "0")
                      .toNumber()
                      .toLocaleString("en-AU")}
                  </TableCell>
                  <TableCell align="right">
                    $
                    {Big(row.sell || "0")
                      .toNumber()
                      .toLocaleString("en-AU")}
                  </TableCell>
                  <TableCell align="right">{row.spread}%</TableCell>
                  <TableCell align="right">
                    ${row.marketCap.toLocaleString("en-AU")}
                  </TableCell>
                  <TableCell align="right">
                    ${row.volume24H.toLocaleString("en-AU")}
                  </TableCell>
                  <TableCell align="left">
                    <Stack direction="row" spacing={0.5}>
                      <Tooltip title="Buy">
                        <MoveToInboxRounded
                          onClick={() => navigate(`/trade/${row.code}/buy`)}
                          color="success"
                          sx={{ cursor: "pointer" }}
                        />
                      </Tooltip>
                      <Tooltip title="Sell">
                        <OutboxRounded
                          onClick={() => navigate(`/trade/${row.code}/sell`)}
                          color="error"
                          sx={{ cursor: "pointer" }}
                        />
                      </Tooltip>
                      <Tooltip title="Charts">
                        <StackedLineChart
                          onClick={() => navigate(`/trade/${row.code}/charts`)}
                          color="inherit"
                          sx={{ cursor: "pointer" }}
                        />
                      </Tooltip>
                      <Tooltip title="Info">
                        <InfoRounded
                          color="primary"
                          onClick={() => navigate(`/trade/${row.code}/info`)}
                          sx={{ cursor: "pointer" }}
                        />
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Page>
  );
};

export { AssetList };
