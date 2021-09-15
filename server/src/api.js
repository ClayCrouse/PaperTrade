import fetch from "node-fetch";

const URL_PREFIX = "https://api.binance.us/api/v3";

export const getPrice = async (ticker) => {
  const url = `${URL_PREFIX}/ticker/price`;
  const urlWithParam = url + (ticker === "all" ? "" : `?symbol=${ticker}`);
  const res = await fetch(urlWithParam);
  const cryptos = await res.json();
  const cryptosOnlyUsd = cryptos.filter(
    (crypto) => crypto.symbol.slice(crypto.symbol.length - 3) === "USD"
  );
  return cryptosOnlyUsd;
};
