import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
//setups variables

const firstBook = {
  img: "https://m.media-amazon.com/images/I/71bLle0wLjS._AC_UY218_.jpg",
  title: "Quantum Physics for Beginners",
  author: "Carl J. Pratt",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/71t523cRsWL._AC_UY218_.jpg",
  title: "Quantum Physics and The Power of the Mind",
  author: "Samantha Goleman and Nancy Patterson",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  //destructure props
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

//looking for what we are going to render and where to render its
ReactDOM.render(<BookList />, document.getElementById("root"));
