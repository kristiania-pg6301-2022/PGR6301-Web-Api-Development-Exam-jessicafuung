import React, { useContext, useState } from "react";
import { ApiContext } from "../useContext";
import { useLoading } from "../useLoader";

function TopicsCard({ topic }) {
  return (
    <>
      <div>
        <ul>
          <p>{topic}</p>
        </ul>
      </div>
    </>
  );
}

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
        <TopicsCard key={article._id} topic={article.topic} />
      ))}
    </div>
  );
}
