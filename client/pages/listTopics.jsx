import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../useContext";
import { useLoading } from "../useLoader";
import { FrontPage } from "./frontPage";

/* display topics in sidebar */
export function TopicsCard({ article: { title, topic, author, articleText } }) {
  /* triggered when a clicked on a topic
  function handleSubmit(event) {
    console.log("Handle submit: " + _id);
    event.preventDefault();
    /*ShowSelectedArticle(_id);}


  return (
    <form onClick={handleSubmit}>
      <div>
        <ul>
          <Link to={"/news/selected"}>{topic}</Link>
        </ul>
      </div>
    </form>
  );*/

  return (
    <>
      <h3>Inne i topics card:</h3>
      <ul>
        Artikkel: {title} Forfatter: {author}
      </ul>
    </>
  );
}

/* fetch from server  */
export function ListTopics() {
  const { listArticles } = useContext(ApiContext);
  const [topic, setTopic] = useState("");
  const [topicQuery, setTopicQuery] = useState("");
  const { loading, error, data } = useLoading(
    async () => await listArticles({ topic }),
    [topic]
  );

  useEffect(async () => {
    await FrontPage("text");
  }, [setTopicQuery]);

  function handleSubmitQuery(e) {
    e.preventDefault();
    setTopic(topicQuery);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmitQuery}>
          {data.map((article) => (
            <ul>
              <h3
                id="topics-btn"
                value={topicQuery}
                onClick={(e) => setTopicQuery(article.topic)}
              >
                {article.topic}
              </h3>
            </ul>
          ))}
        </form>
      </div>
    </div>
  );
}
