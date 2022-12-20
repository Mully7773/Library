import React, { cloneElement } from "react";
import Card from "./UI/Card";
import "./Book.scss";
// props.books.filter((book) => { return book.id !== props.id)};

const Book = (props) => {
  const deleteBook = () => {
    console.log(props.id);
    const userConfirm = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (userConfirm) {
      props.setBooks(
        props.books.filter((book) => {
          return book.id !== props.id;
        })
      );
    }
  };
  // console.log(props.date);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const year = props.date.getFullYear();
  // console.log(year);
  return (
    <Card>
      <div className="book-description">
        <h2 className="book-description__book-title">{props.title}</h2>
        <br></br>
        <span className="book-description__by-text">by</span>
        <p className="book-description__book-author">{props.author}</p>
        <p className="book-description__book-pages">{props.pages} Pages</p>
        <p className="book-description__date">
          {month} {day}, {year}
        </p>
        <div className="x-container">
          <button onClick={deleteBook} className="x-container__button">
            &times;
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Book;
