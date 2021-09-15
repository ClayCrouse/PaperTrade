import express from "express";
import { getPrice } from "./api.js";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/test", (request, response) => {
  console.log("test called");
  const jsonObject = {
    json: "working",
    test: "test",
  };

  response.json(jsonObject);
});

app.get("/data", async (req, res) => {
  const { ticker } = req.query;
  if (ticker === "") {
    res.json({
      price: "-1",
    });
  } else {
    const apiRes = await getPrice(ticker);
    res.json(apiRes);
  }
});

const port = 8080;

console.log("listening on port 8080...");
app.listen(port);
