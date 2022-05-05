import React, { useContext, useState } from "react";
import { ApiContext } from "../useContext";
import { useLoading } from "../useLoader";

export function ArticleCard({
  article: { title, topic, author, articleText },
}) {
  return (
    <>
      <ul>
        Artikkel: {title} Forfatter: {author}
      </ul>
    </>
  );
}

export function FrontPage({ user }) {
  const { listArticles } = useContext(ApiContext);
  const [topic, setTopic] = useState("");
  const [topicQuery, setTopicQuery] = useState("");
  const { loading, error, data } = useLoading(
    async () => await listArticles({ topic }),
    [topic]
  );

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

  if (!user || Object.keys(user).length === 0) {
    return (
      <h1>
        Logg inn eller registrer deg og få tilgang til aktuelle nyhetsartikler
      </h1>
    );
  }

  if (user.google !== undefined || user.microsoft !== undefined) {
    return (
      <div>
        <div>
          <form onSubmit={handleSubmitQuery}>
            {data.map((article) => (
              <ul>
                <button
                  id="topic-query"
                  value={topicQuery}
                  onClick={(e) => setTopicQuery(article.topic)}
                >
                  {article.topic}
                </button>
              </ul>
            ))}
          </form>
        </div>
        {data.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    );
  }
}
