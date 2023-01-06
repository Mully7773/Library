import Button from "./Button";
import "./DeleteModal.scss";

import { ReactComponent as Flourish } from ".././img/Birds-Flourish.svg";

const DeleteModal = (props) => {
  const deleteBook = () => {
    props.setBooks(
      props.books.filter((book) => {
        return book.id !== props.id;
      })
    );
  };

  const onDeny = () => {
    props.setShowDeleteModal(false);
    return;
  };

  return (
    <>
      <div className="backdrop" onClick={onDeny}></div>
      <div className="modal-container">
        <header className="modal-container__header">
          <h2 className="modal-container__heading">
            Are you sure you want to delete this book?
          </h2>
        </header>
        <section>
          <Flourish alt="bird flourish logo" className="modal-container__img" />
        </section>
        <footer className="modal-container__footer">
          <Button onClick={deleteBook} className="modal-container__btn">
            Yes
          </Button>
          <Button onClick={onDeny} className="modal-container__btn">
            No
          </Button>
        </footer>
      </div>
    </>
  );
};

export default DeleteModal;
