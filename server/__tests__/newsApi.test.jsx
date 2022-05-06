import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import request from "supertest";
import dotenv from "dotenv";
import { NewsApi } from "../newsApi";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);

function randomString(length) {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return result;
}

beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db("unit_tests");
  await database.collection("articles").deleteMany({});
  app.use("/api/news", NewsApi(database));
});
afterAll(() => {
  mongoClient.close();
});

describe("news api test suit", () => {
  it("test article", async () => {
    const author = "Andre Persson";
    const title = randomString(6);

    await request(app).post("/api/news").send({ author, title }).expect(200);

    expect(await request(app).get("/api/news").expect(200));
  });
});
