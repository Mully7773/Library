import AddBookButton from "../AddBookButton";
import AppTitle from "../AppTitle";
import BookForm from "../NewBook/BookForm";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <AppTitle />
      <AddBookButton />
      <BookForm />
    </div>
  );
};

export default Sidebar;
