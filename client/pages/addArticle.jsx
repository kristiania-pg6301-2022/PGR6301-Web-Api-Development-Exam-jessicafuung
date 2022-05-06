import React, { useContext, useState } from "react";
import { ApiContext } from "../useContext";
import { useLoading } from "../useLoader";

export function AddNewArticle({ user }) {
  const { listArticles } = useContext(ApiContext);
  const { createArticle } = useContext(ApiContext);

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState();
  const [topic, setTopic] = useState("");
  const [articleText, setArticleText] = useState();

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

  function handleSubmit(event) {
    event.preventDefault();
    createArticle({ author, title, topic, articleText });
  }

  if (user.microsoft !== undefined) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <h1>Skriv din artikkel, {user.microsoft.name}</h1>

          <ul>
            <p>Kategori:</p>
            <select value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option value={"empty"}>Velg</option>
              <option value={"Politikk"}>Politikk</option>
              <option value={"Helse"}>Helse</option>
              <option value={"Natur"}>Natur</option>
              <option value={"Sport"}>Sport</option>
            </select>
          </ul>

          <ul>
            <p>Din overskrift: </p>
            <input
              required={"required"}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </ul>

          <ul>
            <p>Artikkel tekst: </p>
            <textarea
              required={"required"}
              value={articleText}
              onChange={(event) => setArticleText(event.target.value)}
            />
          </ul>

          <div>
            <button
              id={"finish-btn"}
              onClick={() => setAuthor(user.microsoft.name)}
            >
              Publiser
            </button>
          </div>
        </form>
      </>
    );
  }

  if (user.google !== undefined) {
    return <h1>You have no access to this action! Please login first</h1>;
  }

  if (!user || Object.keys(user).length === 0) {
    return <h1>You have no access to this action! Please login first </h1>;
  }
}
