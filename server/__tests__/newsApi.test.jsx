import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import request from "supertest";
import dotenv from "dotenv";
import { NewsApi } from "../newsApi";

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(
  "mongodb+srv://jessicafuung:stress123ball@cluster0.2m1ly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

beforeAll(async () => {
  await mongoClient.connect();
  const database = mongoClient.db("unit_tests");
  await database.collection("movies").deleteMany({});
  app.use("/api/news", NewsApi(database));
});
afterAll(() => {
  mongoClient.close();
});

describe("news api test suit", () => {
  it("test article", async () => {
    const author = "Andre Persson";
    const title = "Solsystemet";

    await request(app).post("/api/news").send({ author, title }).expect(200);

    expect(await request(app).get("/api/news").expect(200));
  });
});
