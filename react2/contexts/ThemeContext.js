import React, {createContext, useState} from 'react';

export const ThemeContext = createContext('light');

//+ThemeContext.Provider
//    Composant qui va permettre de diffuser n'importe quel type de data dans ses sous-composants
//ThemeContext.Consumer
//    Composant qui va permettre de récuperer n'importe quel type de data venant du premier parent Provider trouvé

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState({theme: 'dark'});

  const toggleTheme = () =>
    setTheme({...theme, theme: theme.theme === 'dark' ? 'light' : 'dark'});

  return (
    <ThemeContext.Provider value={{theme: theme.theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
