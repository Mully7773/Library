import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Book from "./components/Book";
import AppContainer from "./components/UI/AppContainer";
import BookView from "./components/UI/BookView";
import Sidebar from "./components/UI/Sidebar";
import NewBook from "./components/NewBook/NewBook";

const dummyData = [
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

const App = () => {
  const [books, setBooks] = useState(() => {
    const storedBooks = JSON.parse(localStorage.getItem("storedBook"));
    console.log(storedBooks);
    // const parsedStoredBooks = storedBooks.forEach((book) => {
    //   new Date(book.dateCompleted);
    // });
    // console.log(parsedStoredBooks);
    return storedBooks || [];
  });

  // const result = books.map((o) => ({
  //   ...o,
  //   dateCompleted: new Date(o.dateCompleted).toLocaleDateString("en-US", {
  //     month: "long",
  //     day: "numeric",
  //     year: "numeric",
  //   }),
  // }));

  useEffect(() => {
    // console.log(books.dateCompleted);
    // const test = books.map((book) => {
    //   return Object.keys(book.dateCompleted).forEach(
    //     (key) => book.dateCompleted[key]
    //   );
    // });
    // console.log(test);

    // This map is used to convert ISO timestamp to a readable date format. Copy all objects from books array, and all properties therein, then change dateCompleted format via toLocaleDateString() method. Set that result to local storage.
    const result = books.map((o) => ({
      ...o,
      dateCompleted: new Date(o.dateCompleted).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    }));

    // console.log(result);
    localStorage.setItem("storedBook", JSON.stringify(result));
    console.log(books);
  }, [books]);

  // useEffect(() => {
  //   const storedBooks = JSON.parse(localStorage.getItem("storedBook"));
  //   if (storedBooks) {
  //     setBooks(storedBooks);
  //   }
  // }, []);

  console.log(books);

  const addBookHandler = (book) => {
    // const parsedDateBook = {
    //   ...book,
    //   dateCompleted: new Date(book.dateCompleted).toLocaleDateString("en-US", {
    //     month: "long",
    //     day: "numeric",
    //     year: "numeric",
    //   }),
    // };
    setBooks((prevBooks) => {
      return [book, ...prevBooks];
      // return [parsedDateBook, ...prevBooks];
    });
    console.log(book);
  };

  return (
    <AppContainer>
      <Sidebar>
        <NewBook onAddBook={addBookHandler} />
      </Sidebar>
      <BookView books={books} setBooks={setBooks} />
    </AppContainer>
  );
};

export default App;
