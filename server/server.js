import express from "express";
import * as path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

import { LoginApi } from "./loginApi.js";
import { NewsApi } from "./newsApi.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
  console.log("Connected to mongodb");
  app.use("/api/news", NewsApi(mongoClient.db(process.env.MONGODB_DATABASE)));
});

app.use("/api/login", LoginApi());

app.use(express.static("../client/dist/"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
  console.log(`Link at Heroku: https://pg6301-exam-2022.herokuapp.com`);
});
