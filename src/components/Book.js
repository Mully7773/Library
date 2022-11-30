import React from "react";
import Card from "./UI/Card";

const Book = (props) => {
  console.log(props);
  return (
    <Card>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
    </Card>
  );
};

export default Book;
