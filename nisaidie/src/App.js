
import './App.css';
import Home from "./home"
import Counsellors from "./counsellors";
import SignupForm from "./Signup_form";
import StoriesList from './StoriesList';
import Contact from './Contact';
import About from './about';
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
           <Route path={"/stories"} element={<StoriesList />} />
             <Route path={"/about"} element={<About />} />
             <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
