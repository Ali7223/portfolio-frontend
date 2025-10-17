 import React from 'react';
 import { Link } from 'react-router-dom';
 import './Navbar.css';
    
  const Navbar = () => {
      console.log('Navbar loaded')

    return (           
      
      <nav className='navBar'>
        <Link to="/">Projects</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/education">Education</Link> |{" "}
        <Link to="/work">Work</Link>
      </nav>    
      )
    }
    
   export default Navbar;
