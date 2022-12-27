import "./AddBookButton.scss";

const AddBookButton = ({ onClick }) => {
  return (
    <div className="add-book-button-container">
      <button onClick={onClick} className="add-book-button-container__button">
        Add Book
      </button>
    </div>
  );
};

export default AddBookButton;
