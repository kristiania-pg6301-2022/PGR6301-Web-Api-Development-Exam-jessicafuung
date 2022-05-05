import { Router } from "express";

export function NewsApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {};

    const { topic } = req.query;
    if (topic) {
      query.topic = topic;
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

  router.post("/", (req, res) => {
    const { google_access_token, microsoft_access_token } = req.signedCookies;
    console.log(google_access_token + microsoft_access_token);

    if (
      google_access_token === undefined &&
      microsoft_access_token === undefined
    ) {
      res.sendStatus(403);
    } else {
      let dateTime = new Date();
      const { author, title, topic, articleText } = req.body;
      mongoDatabase
        .collection("articles")
        .insertOne({ author, title, topic, dateTime, articleText });
      res.sendStatus(200);
    }
  });

  return router;
}
