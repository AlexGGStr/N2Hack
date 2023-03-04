import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  const [data, setData] = useState(null);
  const getPage = () => {
    axios.get("http://localhost:8080/auth/google").then((res) => {
      setData(res);
      console.log(res);
    });
  };

  const [currentPage, setCurrentPage] = useState("signin");

  return (
    <div className="App">
      {/* <Navigation /> */}
      {currentPage === "signin" ? <SignIn getPage={getPage} /> : <Register />}
    </div>
  );
};

export default App;
