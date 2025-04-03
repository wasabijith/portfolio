import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [beePosition, setBeePosition] = useState({ x: 0, y: 0 });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setBeePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <nav>
      <div className="navbar">
        <div className="nav-container">
          <div className="nav-links">
            <a href="#home" className="nav-btn">Home</a>
            <a href="#about" className="nav-btn">About</a>
            <a href="#skills" className="nav-btn">Skills</a>
            <a href="#experience" className="nav-btn">Experience</a>
            <a href="#projects" className="nav-btn">Projects</a>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <Sun /> : <Moon />}
          </button>
        </div>
        <div
          className="bee-animation"
          style={{
            position: 'absolute',
            top: beePosition.y - 25, 
            left: beePosition.x - 25, 
            transition: 'all 0.2s ease-out',
            pointerEvents: 'none',
          }}
        >
          🐝
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
