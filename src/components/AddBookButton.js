import "./AddBookButton.scss";

const AddBookButton = ({ onClick, showForm }) => {
  const add = "Add Book";
  const cancel = "Cancel";
  return (
    <div className="add-book-button-container">
      <button onClick={onClick} className="add-book-button-container__button">
        {!showForm && add}
        {showForm && cancel}
      </button>
    </div>
  );
};

export default AddBookButton;
