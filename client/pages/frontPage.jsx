import React, { useContext, useState } from "react";
import { ApiContext } from "../useContext";
import { useLoading } from "../useLoader";

let chosen = "";

export function ArticleCard({
  article: { title, topic, author, articleText },
}) {
  if (chosen === title) {
    return (
      <>
        <ul>
          <h1>{title}</h1>{" "}
          <p style={{ color: "gray" }}>
            <u>
              Forfatter: {author} &nbsp; Kategori: {topic}
            </u>
          </p>
          <p> {articleText}</p>
        </ul>
      </>
    );
  } else {
    return <div></div>;
  }
}

export function FrontPage({ user }) {
  const { listArticles } = useContext(ApiContext);
  const [title, setTitle] = useState("");
  const [titleQuery, setTitleQuery] = useState("");
  const { loading, error, data } = useLoading(
    async () => await listArticles({ title }),
    [title]
  );

  function handleSubmitQuery(e) {
    e.preventDefault();
    setTitle(titleQuery);
    chosen = titleQuery;
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
      <div>
        <h1>Velkommen til Fyrstikkposten!</h1>
        <h2>
          For å få tilgang til aktuelle nyhetsaker må du logge inn eller
          registrer deg for å få tilgang{" "}
        </h2>
      </div>
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
                  id="title-query"
                  value={titleQuery}
                  onClick={(e) => setTitleQuery(article.title)}
                >
                  {article.title}
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
