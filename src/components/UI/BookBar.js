import "./BookBar.scss";

const BookBar = (props) => {
  console.log(props.books);
  const pages = props.books.map((book) => book.pages);
  if (pages.length === 0) return;
  const totalPages = pages.reduce((acc, cur) => cur + acc).toLocaleString();

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
        <strong>{totalPages}</strong> {todayString}
      </span>
    </div>
  );
};

export default BookBar;
