import React from "react";

const Book = (props) => {
  //destructure props, since used spread operator can use props object
  const { img, title, author } = props;

  //attribute, eventHandler
  //onClick, onMouseOver

  //handler for the onClick event
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log("author: " + author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complext example
      </button>
    </article>
  );
};

export default Book;
