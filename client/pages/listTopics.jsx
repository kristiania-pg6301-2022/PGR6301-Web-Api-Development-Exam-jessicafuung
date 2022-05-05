import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../useContext";
import { useLoading } from "../useLoader";
import { Link, useNavigate } from "react-router-dom";

/* display topics in sidebar */
export function TopicsCard({ article: { _id, topic } }) {
  /* triggered when a clicked on a topic */
  function handleSubmit(event) {
    console.log("Handle submit: " + _id);
    event.preventDefault();
    setShowArticle(true);
    /*ShowSelectedArticle(_id);*/
  }

  return (
    <form onClick={handleSubmit}>
      <div>
        <ul>
          <Link to={"/news/selected"}>{topic}</Link>
        </ul>
      </div>
    </form>
  );
}

/* fetch from server  */
export function ListTopics() {
  const { listArticles } = useContext(ApiContext);
  const [topic, setTopic] = useState("");
  const { loading, error, data } = useLoading(
    async () => await listArticles({ topic }),
    [topic]
  );

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
      <h1 style={{ marginLeft: 40 }}>Topics: </h1>
      {data.map((article) => (
        <TopicsCard key={article._id} article={article} />
      ))}
    </div>
  );
}
