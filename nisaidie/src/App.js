import logo from './logo.svg';
import './App.css';
import Home from "./home"
import Counsellors from './counsellors';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
