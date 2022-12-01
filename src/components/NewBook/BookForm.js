import "./BookForm.scss";

const BookForm = () => {
  return (
    <form>
      <div className="new-book__inputs">
        <div className="new-book__input">
          <label>Title</label>
          <input placeholder="Ender's Game" type="text" />
        </div>
        <div className="new-book__input">
          <label>Author</label>
          <input placeholder="Orson Scott Card" type="text" />
        </div>
        <div className="new-book__input">
          <label>Pages</label>
          <input placeholder="324" type="number" />
        </div>
        <div className="new-book__input">
          <label>Date Completed</label>
          <input placeholder="Ender's Game" type="date" />
        </div>
      </div>
      <div className="new-book__action">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BookForm;
