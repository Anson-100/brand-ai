import { useState } from "react"
import {
  SunIcon,
  MoonIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  UserCircleIcon,
  ShareIcon,
} from "@heroicons/react/24/solid"

type Props = {
  isDark: boolean
  toggleDarkMode: () => void
}

const Footbar = ({ isDark, toggleDarkMode }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  //   const toggleMenu = () => {
  //     setIsMenuToggled(!menuOpen)
  //   }

  return (
    <nav>
      <div className="fixed bottom-0 w-full bg-white dark:bg-black">
        <div className="w-[95%] m-auto h-[1px] bg-gray-300 dark:bg-white"></div>
        <div className="flex items-center justify-between w-[90%] m-auto py-2">
          {" "}
          <button onClick={() => setIsMenuToggled(!isMenuToggled)} className="">
            <EllipsisVerticalIcon className="text-black w-8 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500 rounded-sm transition-all duration-100" />
          </button>
          {/* <button>
            <HeartIcon className="text-black w-8 dark:text-white" />
          </button> */}
          <button>
            <UserCircleIcon className="text-black w-8 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500 rounded-sm transition-all duration-100" />
          </button>
          <button>
            <ShareIcon className="text-black w-8 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500 rounded-sm transition-all duration-100" />
          </button>
        </div>
      </div>
      {/* NAVBAR MENU */}
      {isMenuToggled && (
        <div
          className={`nav-menu fixed left-2 bottom-[45px] h-[200px] w-[200px] bg-white dark:bg-gray-700 rounded-lg dark:shadow-none ${
            isMenuToggled ? "open" : "closed"
          }`}
        >
          <div className="bg">
            <p className="text-center dark:text-white py-1 text-lg">settings</p>
          </div>{" "}
          <div className="w-[95%] h-[1px] bg-gray-400 m-auto"></div>
          <div>
            <p></p>
          </div>
          <div
            onClick={toggleDarkMode}
            className="cursor-pointer flex items-center w-[90%] m-auto justify-between hover:bg-gray-200 dark:hover:bg-gray-500 px-2 my-1 rounded-lg transition-all duration-200"
          >
            {" "}
            <p className="text-black dark:text-white">dark mode</p>{" "}
            <div className="flex">
              {!isDark ? (
                <SunIcon className="text-black h-4 m-auto px-4" />
              ) : (
                <MoonIcon className="text-white h-4 m-auto px-4" />
              )}{" "}
              <div>
                {" "}
                <input
                  type="checkbox"
                  id="darkModeSwitch"
                  checked={isDark}
                  className="hidden"
                />
                <label
                  htmlFor="darkModeSwitch"
                  className="toggle-label relative cursor-pointer block w-[27px] h-[15px] bg-gray-600 dark:bg-desert-brown rounded-full transition-all duration-500"
                  onClick={event => event.stopPropagation()}
                >
                  <span
                    className={`toggle-dot absolute top-0.5 left-0.5 w-[11px] h-[11px] bg-gray-200 rounded-full transition-transform dark:bg-cream ${
                      isDark ? "translate-x-[11px]" : ""
                    }`}
                  ></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Footbar
