import AppContext from "../context/AppContext";
import { useContext } from "react";
import { CloudMoonIcon, CloudSunIcon } from "@phosphor-icons/react";



const FinderHeader = () => {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <div className="w-full  mx-auto justify-between items-center flex flex-row bg-transparent">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white transition-colors">
        devfinder
      </h1>
      <div className="flex flex-row items-center gap-2">
        <p className="text-gray-800 dark:text-white font-bold tracking-widest transition-colors">
          {theme === "dark" ? "LIGHT" : "DARK"}
        </p>
        <button className="cursor-pointer transition-colors" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <CloudSunIcon size={24} color="white" /> : <CloudMoonIcon size={24} color="black" />}
        </button>
      </div>
    </div>
  );
};

export default FinderHeader;
