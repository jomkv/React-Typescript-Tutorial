// Dependencies or External Imports


// Components
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

function App() {
  
  return (
    <div className='container'>  
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
