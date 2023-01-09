import React, { useState } from "react";
import Card from "./UI/Card";
import "./Book.scss";
import DeleteButton from "./DeleteButton";
import DeleteModal from "./UI/DeleteModal";

const Book = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  console.log(props.date);
  const fullDate = new Date(props.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const deleteBook = () => {
    setShowDeleteModal(true);
  };

  const onDeny = () => {
    props.setShowDeleteModal(false);
    return;
  };

  return (
    <>
      {showDeleteModal && (
        <DeleteModal
          setBooks={props.setBooks}
          books={props.books}
          id={props.id}
          setShowDeleteModal={setShowDeleteModal}
          onDeny={onDeny}
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
            {/* {month} {day}, {year} */}
            {fullDate}
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
