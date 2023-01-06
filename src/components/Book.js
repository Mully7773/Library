import React, { useState } from "react";
import Card from "./UI/Card";
import "./Book.scss";
import DeleteButton from "./DeleteButton";
import DeleteModal from "./UI/DeleteModal";

const Book = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const year = props.date.getFullYear();

  const deleteBook = () => {
    setShowDeleteModal(true);
  };

  return (
    <>
      {showDeleteModal && (
        <DeleteModal
          setBooks={props.setBooks}
          books={props.books}
          id={props.id}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
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
          <DeleteButton
            // onShowDeleteModal={onShowDeleteModal}
            onClick={deleteBook}
          />
        </div>
      </Card>
    </>
  );
};

export default Book;
