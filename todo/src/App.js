import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Todo from "./pages/todo/Todo";
import { Footer } from "./layout/Footer";
import { FaBars } from "react-icons/fa";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="todo-container">
      <Router>
        <header className="header">
          <FaBars onClick={() => setShowNav(!showNav)} />
          <h2 className="title">To Do List</h2>
        </header>
        <Navbar show={showNav} />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
