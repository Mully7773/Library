import React, { useState } from "react";
import "./BookForm.scss";

const BookForm = (props) => {
  const titleChangeHandler = (e) => {
    console.log(e.target.value);
    // setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const pageChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const dateChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <div className="new-book__inputs">
        <div className="new-book__input">
          <label>Title</label>
          <input
            placeholder="Ender's Game"
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-book__input">
          <label>Author</label>
          <input
            placeholder="Orson Scott Card"
            type="text"
            onChange={authorChangeHandler}
          />
        </div>
        <div className="new-book__input">
          <label>Pages</label>
          <input placeholder="324" type="number" onChange={pageChangeHandler} />
        </div>
        <div className="new-book__input">
          <label>Date Completed</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-book__action">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BookForm;
