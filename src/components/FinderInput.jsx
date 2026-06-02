import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState, useContext } from "react";
import AppContext from "../context/AppContext";

const FinderInput = () => {
  const [user, setUser] = useState("");
  const { userData, setSearched } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.trim()) return;
    try {
      await userData(user);
      setSearched(true)
    }catch(error){
    console.error("Fehler beim Laden des Users:", error)
    }
  };

  return (
    <form
      className="w-full flex flex-row items-center justify-center dark:bg-[#1f2a48] bg-white transition-colors p-2 rounded-2xl gap-2 shadow-md relative"
      onSubmit={handleSubmit}
    >
      <div>
        <MagnifyingGlassIcon color="#0079fe" size={30} />
      </div>
      <input
        type="text"
        placeholder="Search for a GitHub user..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none border-none font-semibold text-xl dark:text-white text-black dark:placeholder:text-gray-400 placeholder-gray-600"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button
        className=" py-3 px-4 mx-auto bg-[#0079fe] text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default FinderInput;
