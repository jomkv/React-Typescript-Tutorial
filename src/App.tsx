// Dependencies or External Imports


// Components
import Greet from './components/3-typing-props/Greet'
import PersonList from './components/4-basic-props/PersonList'

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
      <PersonList persons={personArray} />
    </div>
  );
}

export default App;
