import "./App.css";
import React from "react";
import Header from "./components/header";
import EmployeeContainer from "./components/empContainer";

const App = () => {
  return (
    <div className="Container">
      <Header />
      <EmployeeContainer />
    </div>
  );
};

export default App;
