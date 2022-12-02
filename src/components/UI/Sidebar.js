import AddBookButton from "../AddBookButton";
import AppTitle from "../AppTitle";
import BookForm from "../NewBook/BookForm";
import NewBook from "../NewBook/NewBook";
import "./Sidebar.scss";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <AppTitle />
      <AddBookButton />
      {props.children}
    </div>
  );
};

export default Sidebar;
