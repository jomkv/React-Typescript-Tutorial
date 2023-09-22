// Dependencies or External Imports


// Components
import User from "./components/context/User"
import UserContextProvider from "./components/context/UserContext"

function App() {
  
  return (
    <div className='container'>  
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
