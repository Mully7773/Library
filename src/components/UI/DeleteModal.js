import Button from "./Button";
import "./DeleteModal.scss";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Flourish } from ".././img/Birds-Flourish.svg";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onDeny}></div>;
};

const ModalOverlay = (props) => {
  return (
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
        <Button onClick={props.onConfirm} className="modal-container__btn">
          Yes
        </Button>
        <Button onClick={props.onDeny} className="modal-container__btn">
          No
        </Button>
      </footer>
    </div>
  );
};

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
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onDeny={onDeny} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onDeny={onDeny} onConfirm={deleteBook} />,
        document.getElementById("overlay-root")
      )}
      {/* <div className="backdrop" onClick={onDeny}></div> */}
      {/* <div className="modal-container">
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
      </div> */}
    </Fragment>
  );
};

export default DeleteModal;
