import "./DeleteButton.scss";
import Button from "./UI/Button";
import DeleteModal from "./UI/DeleteModal";

const DeleteButton = (props) => {
  const deleteBook = () => {
    const userConfirm = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (userConfirm) {
      props.setBooks(
        props.books.filter((book) => {
          return book.id !== props.id;
        })
      );
    }
  };
  return (
    <div className="x-container">
      {/* <DeleteModal /> */}
      <button onClick={deleteBook} className="x-container__button">
        &times;
      </button>
    </div>
  );
};

export default DeleteButton;
