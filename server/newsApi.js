import { Router } from "express";

export function NewsApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {};

    const { topic, title } = req.query;
    if (topic) {
      query.topic = topic;
    }

    if (title) {
      query.title = title;
    }

    const articles = await mongoDatabase
      .collection("articles")
      .find(query)
      .map(({ _id, author, title, topic, releaseDate, articleText }) => ({
        _id,
        author,
        title,
        topic,
        releaseDate,
        articleText,
      }))
      .limit(100)
      .toArray();

    res.json(articles);
  });

  router.post("/", async (req, res) => {
    let dateTime = new Date();
    const { author, title, topic, articleText } = req.body;
    const query = { title };

    const articleTitle = await mongoDatabase
      .collection("articles")
      .find(query)
      .map(({ title }) => ({
        title,
      }))
      .toArray();

    if (articleTitle.length >= 1) {
      res.sendStatus(400);
    } else {
      mongoDatabase
        .collection("articles")
        .insertOne({ author, title, topic, dateTime, articleText });
      res.sendStatus(200);
    }
  });

  return router;
}
