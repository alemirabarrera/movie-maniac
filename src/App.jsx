// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <AllRoutes />
    </div>
  );
};

export default App;
