import React, { useContext, useState } from "react";
import { useLoading } from "../useLoader";
import { ApiContext } from "../useContext";

/* display all articles */
function ArticlesCard({
  article: { author, title, topic, releaseDate, articleText },
}) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <h3>Written by: {author}</h3>
        <p>
          <b>Topic:</b> {topic}, <b>Date:</b> {releaseDate}
        </p>
        <div>{articleText}</div>
      </div>
    </>
  );
}

/* fetch from server and map it out */
export function ListArticles() {
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
      <h1>All News Articles in the database</h1>

      {data.map((article) => (
        <ArticlesCard key={article._id} article={article} />
      ))}
    </div>
  );
}
