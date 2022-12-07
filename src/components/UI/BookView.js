import Book from "../Book";
import "./BookView.scss";

const BookView = (props) => {
  console.log(props);
  return (
    <div className="book-view-container">
      <h1 className="book-view-container__heading">My Books</h1>
      <div className="book-view">
        {props.books.map((book) => (
          <Book
            title={book.bookTitle}
            author={book.bookAuthor}
            pages={book.pages}
            date={book.dateCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default BookView;
