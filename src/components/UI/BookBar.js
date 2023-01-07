import "./BookBar.scss";

const BookBar = (props) => {
  console.log(props.books);
  const pages = props.books.map((book) => book.pages);
  if (pages.length === 0)
    return (
      <p className="empty-message">
        There aren't any books yet. Try adding some!
      </p>
    );
  const totalPages = pages.reduce((acc, cur) => cur + acc).toLocaleString();

  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.toLocaleString("default", { month: "long" });
  const day = newDate.getDate();
  const todayString = `pages read as of today, ${month} ${day}, ${year}`;

  const totalBooksString = `total books in your library`;

  const heading = "My Books";

  return (
    <>
      <div className="book-bar">
        <h1 className="book-bar__heading">{heading}</h1>
        <div className="book-bar__page-info total-pages">
          <strong>{totalPages}</strong> {todayString}
        </div>
        <div className="book-bar__page-info total-books">
          <strong>{pages.length}</strong> {totalBooksString}
        </div>
      </div>
    </>
  );
};

export default BookBar;
