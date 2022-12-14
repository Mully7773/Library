import React, { useState } from "react";
import AddBookButton from "../AddBookButton";
import Button from "../UI/Button";
import "./BookForm.scss";

const BookForm = ({ onSaveBookHandler }) => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm((prevState) => (prevState = !prevState));
  };

  const [book, setNewBook] = useState({
    title: "",
    author: "",
    pages: "",
    date: "",
  });

  const handleFormChange = (e) => {
    setNewBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const bookData = {
      bookTitle: book.title,
      bookAuthor: book.author,
      pages: +book.pages,
      dateCompleted: new Date(book.date + "T00:00:00"),
    };
    // console.log(bookData);
    console.log(book.date);
    console.log(bookData.dateCompleted);
    onSaveBookHandler(bookData);

    setNewBook({
      title: "",
      author: "",
      pages: "",
      date: "",
    });
    setShowForm(false);
  };

  return (
    <>
      <AddBookButton showForm={showForm} onClick={handleShowForm} />

      <form
        className={showForm ? "form open" : "form"}
        onSubmit={submitHandler}
      >
        <div className="new-book__inputs">
          <div className="new-book__input">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              value={book.title}
              placeholder="Ender's Game"
              type="text"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="new-book__input">
            <label htmlFor="author">Author</label>
            <input
              id="author"
              name="author"
              value={book.author}
              placeholder="Orson Scott Card"
              type="text"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="new-book__input">
            <label htmlFor="pages">Pages</label>
            <input
              id="pages"
              name="pages"
              value={book.pages}
              placeholder="324"
              type="number"
              required
              onChange={handleFormChange}
            />
          </div>
          <div className="new-book__input">
            <label htmlFor="date">Date Completed</label>
            <input
              id="date"
              name="date"
              value={book.date}
              type="date"
              required
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className="new-book__action">
          <Button className="submitBtn" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default BookForm;
