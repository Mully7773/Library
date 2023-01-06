import "./AddBookButton.scss";
import Button from "./UI/Button";

const AddBookButton = ({ onClick, showForm }) => {
  const add = "Add Book";
  const cancel = "Cancel";
  return (
    <div className="add-book-button-container">
      <Button onClick={onClick} className="add-book-button-container__button">
        {!showForm && add}
        {showForm && cancel}
      </Button>
    </div>
  );
};

export default AddBookButton;
