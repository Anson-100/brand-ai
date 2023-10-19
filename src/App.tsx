import Navbar from "@/scenes/navbar"
import Landing from "@/scenes/landing"
import Footbar from "./scenes/footbar"
import useDarkMode from "./components/DarkMode"

function App() {
  const { isDark, toggleDarkMode } = useDarkMode()
  return (
    <div className="app bg-white dark:bg-black">
      {/* <Navbar /> */}
      <div className="h-full">
        <Landing isDark={isDark} />
      </div>
      <div>
        <Footbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  )
}

export default App
