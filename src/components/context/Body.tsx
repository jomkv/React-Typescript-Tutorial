import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"

function Body() {
  const theme = useContext(ThemeContext)

  return (
    <div style={{background: theme.primary.main}}>Body</div>
  )
}

export default Body