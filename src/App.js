import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Projects from "./components/Projects";
import About from "./pages/About";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Navbar from "./pages/navbar/Navbar";
import './App.css';   
import Footer from "./pages/footer/footer";


function App() {
  return (
    <Router>
      <Navbar />
    
  
        <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<Projects />} /> 
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;