import React, { useState } from "react";
import "./BookForm.scss";

const BookForm = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    console.log(e.target.value);
    setAuthor(e.target.value);
  };

  const pageChangeHandler = (e) => {
    console.log(e.target.value);
    setPage(e.target.value);
  };

  const dateChangeHandler = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const bookData = {
      bookTitle: title,
      bookAuthor: author,
      bookPages: page,
      completionDate: new Date(date + "T00:00:00"),
    };
    console.log(bookData);

    setTitle("");
    setAuthor("");
    setPage("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-book__inputs">
        <div className="new-book__input">
          <label>Title</label>
          <input
            value={title}
            placeholder="Ender's Game"
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-book__input">
          <label>Author</label>
          <input
            value={author}
            placeholder="Orson Scott Card"
            type="text"
            onChange={authorChangeHandler}
          />
        </div>
        <div className="new-book__input">
          <label>Pages</label>
          <input
            value={page}
            placeholder="324"
            type="number"
            onChange={pageChangeHandler}
          />
        </div>
        <div className="new-book__input">
          <label>Date Completed</label>
          <input value={date} type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-book__action">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BookForm;
