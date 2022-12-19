import React, { useState } from "react";
import "./BookForm.scss";

const BookForm = ({ onSaveBookHandler }) => {
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [page, setPage] = useState("");
  // const [date, setDate] = useState("");

  const [book, setBook] = useState({
    title: "",
    author: "",
    pages: "",
    date: "",
  });

  const handleFormChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  // const titleChangeHandler = (e) => {
  //   console.log(e.target.value);
  //   setTitle(e.target.value);
  // };

  // const authorChangeHandler = (e) => {
  //   console.log(e.target.value);
  //   setAuthor(e.target.value);
  // };

  // const pageChangeHandler = (e) => {
  //   console.log(e.target.value);
  //   setPage(e.target.value);
  // };

  // const dateChangeHandler = (e) => {
  //   console.log(e.target.value);
  //   setDate(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const bookData = {
      bookTitle: book.title,
      bookAuthor: book.author,
      pages: +book.pages,
      dateCompleted: new Date(book.date + "T00:00:00"),
    };
    // console.log(bookData);
    onSaveBookHandler(bookData);

    setBook({
      title: "",
      author: "",
      pages: "",
      date: "",
    });

    // setTitle("");
    // setAuthor("");
    // setPage("");
    // setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-book__inputs">
        <div className="new-book__input">
          <label>Title</label>
          <input
            name="title"
            value={book.title}
            placeholder="Ender's Game"
            type="text"
            required
            onChange={handleFormChange}
          />
        </div>
        <div className="new-book__input">
          <label>Author</label>
          <input
            name="author"
            value={book.author}
            placeholder="Orson Scott Card"
            type="text"
            required
            onChange={handleFormChange}
          />
        </div>
        <div className="new-book__input">
          <label>Pages</label>
          <input
            name="pages"
            value={book.pages}
            placeholder="324"
            type="number"
            required
            onChange={handleFormChange}
          />
        </div>
        <div className="new-book__input">
          <label>Date Completed</label>
          <input
            name="date"
            value={book.date}
            type="date"
            required
            onChange={handleFormChange}
          />
        </div>
      </div>
      <div className="new-book__action">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BookForm;
