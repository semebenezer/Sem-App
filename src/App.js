
// import { Heart, User } from "@phosphor-icons/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Form from "./Form";
import Navbar from "./Navbar"

export default function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        
    </Router>
  );
}
