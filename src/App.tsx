// Dependencies or External Imports


// Components
import Greet from './components/5-advanced-props/Greet'

function App() {
  return (
    <div className='container'>
      <Greet isLoggedIn={true} name="Jom" />
    </div>
  );
}

export default App;
