import { useState } from "react";
import "./DeleteButton.scss";
import Button from "./UI/Button";
import DeleteModal from "./UI/DeleteModal";

const DeleteButton = ({ onClick }) => {
  // const [showDeleteModal, setShowDeleteModal] = useState(false);

  // const deleteBook = () => {
  //   setShowDeleteModal(true);
  //   console.log(showDeleteModal);
  // const userConfirm = window.confirm(
  //   "Are you sure you want to delete this book?"
  // );
  // if (userConfirm) {
  //   props.setBooks(
  //     props.books.filter((book) => {
  //       return book.id !== props.id;
  //     })
  //   );
  // }
  // };

  // props.onShowDeleteModal(showDeleteModal);

  return (
    <>
      {/* {showDeleteModal && <DeleteModal />} */}
      <div className="x-container">
        <button onClick={onClick} className="x-container__button">
          &times;
        </button>
      </div>
    </>
  );
};

export default DeleteButton;
