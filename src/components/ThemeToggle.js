import React, { useState, useEffect } from 'react';
import sun from '../images/sun.png';
import moon from '../images/moon.png';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    // Check if the user has a preference for dark mode and set it accordingly
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);

    // Check if the user has manually toggled the theme
    const savedTheme = localStorage.getItem('light-d');
    if (savedTheme === 'enabled') {
      setIsDarkMode(true);
      enableLightMode();
    } else if (savedTheme === 'disabled') {
      setIsDarkMode(false);
      disableLightMode();
    }
  }, []);

  const enableLightMode = () => {
    document.body.classList.add('light-d');
    localStorage.setItem('light-d', 'enabled');
    setIsDarkMode(false);
  };

  const disableLightMode = () => {
    document.body.classList.remove('light-d');
    localStorage.setItem('light-d', 'disabled');
    setIsDarkMode(true);
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      enableLightMode();
    } else {
      disableLightMode();
    }
  };

  return (
    <div className={`theme-color ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
      <img id='theme-icon' src={isDarkMode ? moon : sun} alt={isDarkMode ? 'Moon' : 'Sun'} />
    </div>
  );
};

export default ThemeToggle;
