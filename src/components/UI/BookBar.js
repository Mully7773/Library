import "./BookBar.scss";

const BookBar = (props) => {
  const heading = "My Books";
  //   const currentDate = new Date().toLocaleDateString;
  return (
    <div className="book-bar">
      <h1 className="book-bar__heading">{heading}</h1>
      <span className="book-bar__page-total">
        <strong>1256</strong> pages read as of today, July 21
      </span>
    </div>
  );
};

export default BookBar;
