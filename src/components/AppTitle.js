import "./AppTitle.scss";
import { ReactComponent as TreeLogo } from "./img/Tree.svg";

const AppTitle = () => {
  return (
    <div className="app-title-container">
      {/* <svg className="app-title-container__tree-logo">
        <use href="./img/Tree/svg"></use>
      </svg> */}
      <TreeLogo />
      <h1 className="app-title-container__app-title">
        <span className="capital-text">B</span>ook{" "}
        <span className="capital-text">T</span>ree
      </h1>
    </div>
  );
};

export default AppTitle;
