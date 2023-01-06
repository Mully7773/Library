import Button from "./Button";
import "./DeleteModal.scss";

const DeleteModal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onConfirm}></div>
      <div className="modal-container">
        <header className="modal-container__header">
          <h2 className="modal-container__heading">
            Are you sure you want to delete this book?
          </h2>
        </header>
        <footer className="modal-container__footer">
          <Button className="modal-container__btn">Yes</Button>
          <Button className="modal-container__btn">No</Button>
        </footer>
      </div>
    </>
  );
};

export default DeleteModal;
