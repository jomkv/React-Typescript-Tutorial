// Dependencies or External Imports


// Components
import ThemeContextProvider from "./components/context/ThemeContext"
import Body from "./components/context/Body"

function App() {
  
  return (
    <div className='container'>  
      <ThemeContextProvider>
        <Body />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
