import React, { useCallback, useEffect, useState } from "react";
import BTC from "cryptocurrency-icons/128/color/btc.png";
import Big from "big.js";
import { useParams } from "react-router-dom";
import {
  Alert,
  Button,
  Skeleton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useAssets, useRates, useBalances } from "@mklem92/swyftx-logic";
import { AccountBalanceWalletOutlined } from "@mui/icons-material";
import { useUser } from "@mklem92/swyftx-logic";
import {
  MarketBuyModal,
  SpendAmountPercentage,
  TradeInput,
  TradeType,
  TradeTypes,
} from "@mklem92/swyftx-classic-ui";
import {
  useSwyftxClient,
  GetPairExchangeRateResponse,
  PlaceOrderResponse,
} from "@mklem92/swyftx-api";

type TradeValues = {
  [assetCode: string]: string;
};

const TradeBuy: React.FC = () => {
  const [tradeValues, setTradeValues] = useState<TradeValues>({});
  const [limit, setLimit] = useState<string>("");
  const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
  const [quote, setQuote] = useState<GetPairExchangeRateResponse>();
  const [order, setOrder] = useState<PlaceOrderResponse>();

  const { code } = useParams();
  const { user } = useUser();
  const { client } = useSwyftxClient();
  const buyAsset = useAssets(code);
  const sellAsset = useAssets(user?.currency.code);
  const rate = useRates(buyAsset);
  const balance = useBalances(sellAsset);

  const getQuote = useCallback(async () => {
    if (!buyAsset || !sellAsset || !limit || !tradeValues[limit]) return;

    const resp = await client.Orders.GetPairExchangeRate({
      buy: buyAsset.code,
      sell: sellAsset.code,
      amount: tradeValues[limit],
      limit,
    });

    const nonLimit = limit === buyAsset.code ? sellAsset.code : buyAsset.code;

    setTradeValues((prevState) => ({
      ...prevState,
      [nonLimit]: limit === buyAsset.code ? resp.total : resp.amount,
    }));
    setQuote(resp);
  }, [limit, buyAsset, sellAsset, tradeValues]);

  useEffect(() => {
    if (buyAsset) {
      setTradeValues((prevState) => ({ ...prevState, [buyAsset.code]: "" }));
    }
  }, [buyAsset]);

  useEffect(() => {
    if (sellAsset) {
      setTradeValues((prevState) => ({ ...prevState, [sellAsset.code]: "" }));
    }
  }, [sellAsset]);

  useEffect(() => {
    getQuote();
  }, [rate?.askPrice, tradeValues[limit]]);

  return (
    <>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
      >
        <img src={BTC} width="100px" />

        <Stack direction="row" alignItems="center" spacing={1}>
          {!rate && <Skeleton variant="text" />}
          <Typography fontSize={24} fontWeight={600}>
            ${Number(rate?.askPrice || 0).toLocaleString("en-AU")} AUD/
            {buyAsset?.code}
          </Typography>
          <Typography
            fontSize={18}
            fontWeight={600}
            color={
              Big(rate?.dailyPriceChange || 0).gt(0)
                ? "success.light"
                : "error.light"
            }
          >
            {rate?.dailyPriceChange}%
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <AccountBalanceWalletOutlined />
          <Typography>
            {Big(balance?.availableBalance || 0).toFixed(
              sellAsset?.price_scale || 8
            )}{" "}
            {sellAsset?.code}
          </Typography>
        </Stack>
        <TradeType
          types={[
            TradeTypes.Market,
            TradeTypes.Limit,
            TradeTypes.Stop,
            TradeTypes.Recurring,
          ]}
        />
        <SpendAmountPercentage
          title={`Choose amount of ${sellAsset?.code} to spend or type below`}
          asset={sellAsset}
        />

        {buyAsset && (
          <TradeInput
            asset={buyAsset}
            title={`How much ${buyAsset?.code}?`}
            value={tradeValues[buyAsset.code]}
            onChange={(val: string) =>
              setTradeValues((prevState) => ({
                ...prevState,
                [buyAsset.code]: val,
              }))
            }
            onFocus={() => setLimit(buyAsset.code)}
          />
        )}

        {sellAsset && (
          <TradeInput
            asset={sellAsset}
            title={`How much ${sellAsset.code}?`}
            value={tradeValues[sellAsset.code]}
            onChange={(val: string) =>
              setTradeValues((prevState) => ({
                ...prevState,
                [sellAsset.code]: val,
              }))
            }
            onFocus={() => setLimit(sellAsset.code)}
          />
        )}

        <Button
          variant="contained"
          disableElevation
          size="large"
          disabled={!quote}
          onClick={() => setShowBuyModal(true)}
        >
          Instant Buy
        </Button>
      </Stack>
      <MarketBuyModal
        open={showBuyModal}
        quote={quote}
        buyAsset={buyAsset}
        sellAsset={sellAsset}
        limit={limit}
        onClose={(e) => {
          setShowBuyModal(false);
          console.log(e);
          setOrder(e);
        }}
      />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={10000}
        open={order !== undefined}
        onClose={() => setOrder(undefined)}
      >
        <Alert
          onClose={() => setOrder(undefined)}
          severity="success"
          icon={false}
          sx={{ width: "100%" }}
        >
          Bought {Big(order?.order.amount || 0).toFixed(8)} {buyAsset?.code} for
          $
          {Big(Big(order?.order.total || 0).toFixed(8))
            .toNumber()
            .toLocaleString("en-AU")}{" "}
          {sellAsset?.code}
        </Alert>
      </Snackbar>
    </>
  );
};

export { TradeBuy };
