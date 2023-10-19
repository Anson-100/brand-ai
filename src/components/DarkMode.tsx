import { useState } from "react"

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    if (!isDark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
    setIsDark(!isDark)
  }

  return { isDark, toggleDarkMode }
}

export default useDarkMode
