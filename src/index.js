import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

//stateless functional component
//always return JSX
//return single element
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71bLle0wLjS._AC_UY218_.jpg"
    alt=""
  />
);

const Title = () => <h1>Quantum Physics for Beginners</h1>;

const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.90rem", marginTop: "0.25rem" }}>
    Carl J. Pratt
  </h4>
);

//looking for what we are going to render and where to render its
ReactDOM.render(<BookList />, document.getElementById("root"));
