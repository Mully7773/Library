import Book from "../Book";
import "./BookView.scss";

const BookView = (props) => {
  console.log(props);
  const heading = "My Books";
  return (
    <div className="book-view-container">
      <h1 className="book-view-container__heading">{heading}</h1>
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
