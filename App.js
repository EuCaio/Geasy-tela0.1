import React from "react";
import Lateral from "./components/Lateral";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Lateral />
      <div className="content">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
