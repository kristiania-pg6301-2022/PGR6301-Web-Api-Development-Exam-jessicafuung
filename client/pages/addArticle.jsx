import React, { useContext, useState } from "react";
import { FormInput } from "../lib/formInput";
import { ApiContext } from "../useContext";

export function AddNewArticle({ user }) {
  const { createArticle } = useContext(ApiContext);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [articleText, setArticleText] = useState("");

  function handleSubmit(event) {
    setAuthor(user.microsoft.name);
    console.log("Author" + author);
    event.preventDefault();
    createArticle({ author, title, topic, articleText });
  }

  if (user.microsoft !== undefined) {
    return (
      <form onSubmit={handleSubmit}>
        <h1>Write an article here, {user.microsoft.name}</h1>
        <FormInput label={"Title:"} value={title} onChangeValue={setTitle} />
        <FormInput label={"Topic:"} value={topic} onChangeValue={setTopic} />
        <FormInput
          label={"Article text:"}
          value={articleText}
          onChangeValue={setArticleText}
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }

  if (user.google !== undefined) {
    return <h1>You have no access to this action!</h1>;
  }

  if (!user || Object.keys(user).length === 0) {
    return <h1>You have no access to this action!</h1>;
  }
}
