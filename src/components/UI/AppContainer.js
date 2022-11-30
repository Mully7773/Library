import React from "react";
import "./AppContainer.scss";
import BookView from "./BookView";
import Sidebar from "./Sidebar";

const AppContainer = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <BookView />
    </div>
  );
};

export default AppContainer;
