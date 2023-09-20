// Dependencies or External Imports


// Components
import Greet from './components/3-typing-props/Greet'
import Person from './components/4-basic-props/Person'

function App() {
  const personArray = [
    {
      name: "Jom",
      age: 19
    },
    {
      name: "John",
      age: 32
    },
    {
      name: "Doe",
      age: 25
    }
  ]

  return (
    <div className='container'>
      <Greet name="Jom" age={19}/>
      <br/>
      <Person persons={personArray} />
    </div>
  );
}

export default App;
