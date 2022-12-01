import AddBookButton from "../AddBookButton";
import AppTitle from "../AppTitle";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <AppTitle />
      <AddBookButton />
    </div>
  );
};

export default Sidebar;
