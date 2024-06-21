import React, { useState, useEffect } from 'react';

const defaultTheme = process.env.REACT_APP_DEFAULT_THEME;

const ThemeSwitcher = () => {
  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'dim',
    'nord',
    'sunset',
  ];

  const [selectedTheme, setSelectedTheme] = useState(defaultTheme);

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setSelectedTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', defaultTheme);
  }, []);

  return (
    <div className="flex items-center">
      <select onChange={handleThemeChange} className="select select-sm w-full max-w-xs" value={selectedTheme}>
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
