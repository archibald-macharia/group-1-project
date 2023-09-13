import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from "./home"
import Counsellors from "./counsellors";
import SignupForm from "./Signup_form";
import NavBar from './nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/counsellors"} element={<Counsellors/>} />
          <Route path={"/signup"} element={<SignupForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
