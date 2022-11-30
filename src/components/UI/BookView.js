import Book from "../Book";
import "./BookView.scss";

const BookView = (props) => {
  console.log(props);
  return (
    <div className="book-view">
      <p>Book View</p>
      <Book
        title={props.books[0].bookTitle}
        author={props.books[0].bookAuthor}
        pages={props.books[0].pages}
        date={props.books[0].dateCompleted}
      />
      <Book
        title={props.books[1].bookTitle}
        author={props.books[1].bookAuthor}
        pages={props.books[1].pages}
        date={props.books[1].dateCompleted}
      />
      <Book
        title={props.books[2].bookTitle}
        author={props.books[2].bookAuthor}
        pages={props.books[2].pages}
        date={props.books[2].dateCompleted}
      />
      <Book
        title={props.books[3].bookTitle}
        author={props.books[3].bookAuthor}
        pages={props.books[3].pages}
        date={props.books[3].dateCompleted}
      />
    </div>
  );
};

export default BookView;
