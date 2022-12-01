import React from "react";
import Card from "./UI/Card";
import "./Book.scss";

const Book = (props) => {
  console.log(props);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card>
      <div className="book-description">
        <h2 className="book-description__book-title">{props.title}</h2>
        <br></br>
        <span>by</span>
        <p className="book-description__book-author">{props.author}</p>
        <p className="book-description__book-pages">{props.pages} Pages</p>
        <p className="book-description__date">
          {month} {day}, {year}
        </p>
      </div>
    </Card>
  );
};

export default Book;
