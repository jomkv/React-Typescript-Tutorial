import { theme } from "./theme"
import { createContext } from "react"

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext(theme)

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider