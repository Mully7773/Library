import React from "react";
import Card from "./UI/Card";

const Book = (props) => {
  console.log(props);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card>
      <h2 className="book-title">{props.title}</h2>
      <p>{props.author}</p>
      <p>{props.pages} Pages</p>
      <p>
        {month} {day}, {year}
      </p>
    </Card>
  );
};

export default Book;
