import React, { useContext, useState } from "react";
import { FormInput } from "../lib/formInput";
import { ApiContext } from "../useContext";

export function AddNewArticle({ user }) {
  const { createArticle } = useContext(ApiContext);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState();
  const [topic, setTopic] = useState("");
  const [articleText, setArticleText] = useState();

  /*
  const refreshPage = () => {
    window.location.reload();
  };*/

  function handleSubmit(event) {
    console.log("Author" + author);
    event.preventDefault();
    createArticle({ author, title, topic, articleText });
    /*refreshPage();*/
  }

  if (user.microsoft !== undefined) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <h1>Skriv din artikkel, {user.microsoft.name}</h1>

          <ul>
            <p>Kategori:</p>
            <FormInput value={topic} onChangeValue={setTopic} />
          </ul>

          <ul>
            <p>Din overskrift: </p>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </ul>

          <ul>
            <p>Artikkel tekst: </p>
            <textarea
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
