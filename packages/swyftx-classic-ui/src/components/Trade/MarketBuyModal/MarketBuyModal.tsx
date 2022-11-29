import React from "react";
import { Button, Dialog, Divider, Stack, Typography } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import {
  GetMarketAssetsResponse,
  GetPairExchangeRateResponse,
  OrderType,
  PlaceOrderResponse,
  useSwyftxClient,
} from "@mklem92/swyftx-api";
import Big from "big.js";

type Props = {
  open: boolean;
  quote?: GetPairExchangeRateResponse;
  buyAsset?: GetMarketAssetsResponse;
  sellAsset?: GetMarketAssetsResponse;
  limit: string;
  onClose: (order?: PlaceOrderResponse) => void;
};

const MarketBuyModal: React.FC<Props> = ({
  open,
  quote,
  buyAsset,
  sellAsset,
  limit,
  onClose,
}) => {
  const { client } = useSwyftxClient();

  const placeOrder = async () => {
    if (!sellAsset || !buyAsset || !quote) return;

    const resp = await client.Orders.PlaceOrder({
      primary: sellAsset.code,
      secondary: buyAsset.code,
      quantity: limit === sellAsset.code ? quote.total : quote.amount,
      assetQuantity: limit,
      orderType: OrderType.MARKET_BUY,
      trigger: quote.price,
    });

    onClose(resp);
  };

  return (
    <Dialog open={open} onClose={() => onClose()} fullWidth>
      <Stack
        direction="row"
        bgcolor="#68c16d"
        padding={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontWeight={500} color="white">
          MARKET BUY
        </Typography>
        <CloseOutlined
          htmlColor="white"
          onClick={() => onClose()}
          sx={{ cursor: "pointer" }}
        />
      </Stack>
      <Stack padding={2} spacing={1}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight={500} fontSize={16}>
            Amount to buy
          </Typography>
          <Typography fontWeight={400} fontSize={20} color="text.secondary">
            {Big(quote?.amount || 0).toFixed(buyAsset?.price_scale || 8)}{" "}
            {buyAsset?.code}
          </Typography>
        </Stack>
        <Divider
          orientation="horizontal"
          sx={{ marginX: "-1rem !important" }}
        />
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight={500} fontSize={16}>
            Rate
          </Typography>
          <Typography fontWeight={400} fontSize={20} color="text.secondary">
            $
            {Big(Big(quote?.price || 0).toFixed(sellAsset?.price_scale || 8))
              .toNumber()
              .toLocaleString("en-AU")}{" "}
            {sellAsset?.code}/{buyAsset?.code}
          </Typography>
        </Stack>
        <Divider
          orientation="horizontal"
          sx={{ marginX: "-1rem !important" }}
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          justifyContent="space-between"
        >
          <Typography fontWeight={500} fontSize={16}>
            Fee
          </Typography>
          <Stack>
            <Typography fontWeight={400} fontSize={20} color="text.secondary">
              {limit === buyAsset?.code && "~"}
              {Big(quote?.feePerUnit || 0)
                .times(quote?.total || 0)
                .toString()}{" "}
              {sellAsset?.code}
            </Typography>
            <Typography fontWeight={400} fontSize={20} color="text.secondary">
              {limit === sellAsset?.code && "~"}(
              {Big(quote?.feePerUnit || 0)
                .times(quote?.amount || 0)
                .toString()}{" "}
              {buyAsset?.code})
            </Typography>
          </Stack>
        </Stack>
        <Divider
          orientation="horizontal"
          sx={{ marginX: "-1rem !important" }}
        />
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight={500} fontSize={16}>
            Total
          </Typography>
          <Typography fontWeight={400} fontSize={20} color="text.secondary">
            {Big(Big(quote?.total || 0).toFixed(sellAsset?.price_scale || 8))
              .toNumber()
              .toLocaleString("en-AU")}{" "}
            {sellAsset?.code}
          </Typography>
        </Stack>
        <Divider
          orientation="horizontal"
          sx={{ marginX: "-1rem !important" }}
        />
        <Stack
          direction="row"
          paddingTop={6}
          spacing={2}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button variant="text" color="inherit" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button
            color="success"
            variant="contained"
            disableElevation
            onClick={placeOrder}
          >
            Confirm Buy
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export { MarketBuyModal };
