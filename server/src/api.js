//const fetch = require("node-fetch");
import fetch from "node-fetch";

const URL_PREFIX = "https://api.binance.us/api/v3";

export const getPrice = async (ticker) => {
  const url = `${URL_PREFIX}/ticker/price?symbol=${ticker}`;
  const res = await fetch(url);
  const resJson = await res.json();
  return resJson.price;
};
