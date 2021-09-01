import express from "express";
import { getPrice } from "./api.js";

const app = express();

app.get("/test", (request, response) => {
  const jsonObject = {
    json: "working",
    test: "test",
  };

  response.json(jsonObject);
});

app.get("/data", async (req, res) => {
  const { ticker } = req.query;
  const price = await getPrice(ticker);
  res.json({
    price: price,
  });
});

const port = 8080;

console.log("listening on port 8080...");
app.listen(port);
