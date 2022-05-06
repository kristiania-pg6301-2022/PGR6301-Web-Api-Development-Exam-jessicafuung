import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../useContext";
import { useLoading } from "../useLoader";

let tmp = "";

export function EditArticle({ user }) {
  const { listArticles } = useContext(ApiContext);
  const { editArticle } = useContext(ApiContext);

  const [author, setAuthor] = useState("");
  const [oldTitle, setOldTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [articleText, setArticleText] = useState();

  const { loading, error, data } = useLoading(
    async () => await listArticles({ author }),
    [author]
  );

  const { name } = user.microsoft;

  useEffect(() => {
    if (user.microsoft !== undefined) {
      setAuthor(name);
    }
  }, [1]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Du har ikke noen artikler å redigere</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    editArticle({ author, newTitle, oldTitle, topic, articleText });
  }

  if (author === name) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <ul>
            <p>Velg artikkel: </p>
            <select
              value={oldTitle}
              onChange={(e) => setOldTitle(e.target.value)}
            >
              <option value={"empty"}>Velg</option>
              {data.map((a) => {
                return (
                  <option key={a._id} value={a.value}>
                    {a.title}
                  </option>
                );
              })}
            </select>
          </ul>

          <ul>
            <p>Endre kategori:</p>
            <select value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option value={"empty"}>Velg</option>
              <option value={"Politikk"}>Politikk</option>
              <option value={"Helse"}>Helse</option>
              <option value={"Natur"}>Natur</option>
              <option value={"Sport"}>Sport</option>
            </select>
          </ul>

          <ul>
            <p>Rediger overskrift: </p>
            <input
              required={"required"}
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
            />
          </ul>

          <ul>
            <p>Rediger tekst: </p>
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
  } else {
    return <div></div>;
  }
}
