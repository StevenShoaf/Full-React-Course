import React from "react";
import ReactDOM from "react-dom";
import { books } from "./data/books";
import Book from "./components/Book";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //using spread operator, spread all props of items
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

//looking for what we are going to render and where to render its
ReactDOM.render(<BookList />, document.getElementById("root"));
