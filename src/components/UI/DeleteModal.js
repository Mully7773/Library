const DeleteModal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onConfirm}></div>
      <div>
        <header>
          <h2>Are you sure you want to delete this book?</h2>
        </header>
        <footer>
          <button>Yes</button>
          <button>No</button>
        </footer>
      </div>
    </>
  );
};

export default DeleteModal;
