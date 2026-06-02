import AppContext from "../context/AppContext";
import { useContext } from "react";
import {
  MapPinLineIcon,
  LinkIcon,
  XLogoIcon,
  BuildingsIcon,
} from "@phosphor-icons/react";

const FinderMain = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="w-full  h-full mx-auto flex flex-row gap-2 dark:bg-[#1f2a48] bg-white p-6 rounded-2xl shadow-lg relative transition-colors">
      {user ? (
        <div className="lg:flex-row flex-col gap-6 flex w-full h-full">
          <div className="shrink-0 lg:block hidden">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 transition-colors"
              />
            </div>
        <div className="w-full h-full flex flex-col gap-4">
          {/* {TOP} */}
          <div className="flex flex-row items-center gap-8">
            <div className="shrink-0 lg:hidden block">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 transition-colors"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-row justify-between items-baseline-last">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">
                  {" "}
                  {user.name || user.login}{" "}
                </h2>
                <p className="lg:block hidden">
                  <span className="text-gray-600 dark:text-white font-semibold transition-colors">
                    Joined{" "}
                    {new Date(user.created_at).toLocaleDateString("en-UK", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </p>
              </div>

              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0079fe] hover:underline"
              >
                @{user.login}
              </a>

              <p className="lg:hidden block">
                <span className="text-gray-600 dark:text-white font-semibold transition-colors">
                  Joined{" "}
                  {new Date(user.created_at).toLocaleDateString("en-UK", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </p>

              <p className="text-gray-600 dark:text-gray-400 transition-colors lg:block hidden mt-10">
                {" "}
                {user.bio || "This user has no bio."}{" "}
              </p>
            </div>
          </div>

          <div className="w-full">
            <p className="text-gray-600 dark:text-gray-400 transition-colors lg:hidden block font-semibold">
              {" "}
              {user.bio || "This user has no bio."}{" "}
            </p>
          </div>

          {/* {MID} */}
          <div className="flex flex-row items-center gap-4 bg-gray-200 dark:bg-[#141c2f] p-4 rounded-lg justify-around transition-colors w-full">
          
            <p className="text-gray-600 dark:text-gray-400 transition-colors flex flex-col font-semibold">
              {" "}
              Repos{" "}
              <strong className=" dark:text-white text-black transition-colors">
                {" "}
                {user.public_repos}{" "}
              </strong>{" "}
            </p>
            <p className="text-gray-600 dark:text-gray-400 transition-colors flex flex-col font-semibold">
              {" "}
              Followers{" "}
              <strong className=" dark:text-white text-black transition-colors">
                {" "}
                {user.followers}
              </strong>{" "}
            </p>
            <p className="text-gray-600 dark:text-gray-400 transition-colors flex flex-col font-semibold">
              {" "}
              Following{" "}
              <strong className=" dark:text-white text-black transition-colors">
                {" "}
                {user.following}{" "}
              </strong>{" "}
            </p>
          </div>

          {/* {LOWER} */}
          <div className="flex sm:flex-row flex-col items-start sm:gap-8 sm:justify-around gap-2 w-full">
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 dark:text-gray-400 transition-colors flex flex-row items-center gap-2">
                {" "}
                <MapPinLineIcon size={32} />{" "}
                {user.location || "No location."}{" "}
              </p>
              <p className="text-gray-600 dark:text-gray-400 transition-colors flex flex-row items-center gap-2">
                {" "}
                <LinkIcon size={32} />{" "}
                {user.blog ? (
                  <a
                    href={user.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0079fe] hover:underline"
                  >
                    {user.blog}
                  </a>
                ) : (
                  "No blog."
                )}{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 dark:text-gray-400 transition-colors flex flex-row items-center gap-2">
                {" "}
                <XLogoIcon size={32} />{" "}
                {user.twitter_username ? (
                  <a
                    href={`https://twitter.com/${user.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0079fe] hover:underline"
                  >
                    @{user.twitter_username}
                  </a>
                ) : (
                  "No X."
                )}{" "}
              </p>
              <p className="text-gray-600 dark:text-gray-400 transition-colors flex flex-row items-center gap-2">
                {" "}
                <BuildingsIcon size={32} />{" "}
                {user.company || "No company."}{" "}
              </p>
            </div>
          </div>
        </div>
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 transition-colors">
          User not found.
        </p>
      )}
    </div>
  );
};

export default FinderMain;
