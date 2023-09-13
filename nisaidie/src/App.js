import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from "./home"
import Counsellors from "./counsellors";
import Signup_form from "./Signup_form";

function App() {
  return (
    <div className="App">
      <Home />
      <Counsellors />
      <Signup_form />
    </div>
  );
}

export default App;
