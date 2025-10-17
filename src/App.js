import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Projects from "./components/Projects";
import About from "./pages/About";
import Education from "./pages/Education";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav>
        <Link to="/">Projects</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/education">Education</Link> |{" "}
        <Link to="/work">Work</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<Projects />} /> {/* fallback */}
      </Routes>
    </Router>
  );
}

export default App;
