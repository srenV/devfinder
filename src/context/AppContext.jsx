import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

  ///////////////////////////////////////////////UserData/////////////////////////////////////////////////////////////////

  const [user, setUser] = useState(null);

  const userData = async (user) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if(!response.ok) {
        console.error('User not found: ' + response.status);
        setUser(null);
        return;
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  //////////////////////////////////////////////THEME/////////////////////////////////////////////////////////

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const value = {
    theme,
    setTheme,
    setUser,
    userData,
    user,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
