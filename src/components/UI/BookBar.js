import "./BookBar.scss";

const BookBar = (props) => {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.toLocaleString("default", { month: "long" });
  const day = newDate.getDate();
  const todayString = `pages read as of today, ${month} ${day}, ${year}`;

  const heading = "My Books";

  return (
    <div className="book-bar">
      <h1 className="book-bar__heading">{heading}</h1>
      <span className="book-bar__page-total">
        <strong>1256</strong> {todayString}
      </span>
    </div>
  );
};

export default BookBar;
