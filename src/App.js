import React from "react";
import { v4 as uuidv4 } from "uuid";
import AppContainer from "./components/UI/AppContainer";

const App = () => {
  const books = [
    {
      id: uuidv4(),
      bookTitle: "Great Expectations",
      bookAuthor: "Charles Dickens",
      pages: 544,
      dateCompleted: new Date(2020, 7, 14),
    },
    {
      id: uuidv4(),
      bookTitle: "Anna Karenina",
      bookAuthor: "Leo Tolstoy",
      pages: 864,
      dateCompleted: new Date(2019, 9, 25),
    },
    {
      id: uuidv4(),
      bookTitle: "Tom Sawyer",
      bookAuthor: "Mark Twain",
      pages: 216,
      dateCompleted: new Date(2016, 4, 24),
    },
    {
      id: uuidv4(),
      bookTitle: "Dracula",
      bookAuthor: "Bram Stoker",
      pages: 418,
      dateCompleted: new Date(2015, 8, 2),
    },
  ];
  console.log(books);
  return (
    <div>
      <AppContainer />
    </div>
  );
};

export default App;
