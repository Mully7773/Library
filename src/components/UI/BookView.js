import Book from "../Book";
import BookBar from "./BookBar";
import "./BookView.scss";

const BookView = (props) => {
  console.log(props);
  return (
    <div className="book-view-container">
      <BookBar books={props.books} />
      <div className="book-view">
        {props.books.map((book) => (
          <Book
            books={props.books}
            setBooks={props.setBooks}
            id={book.id}
            key={book.id}
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
