// Dependencies or External Imports


// Components
import PersonList from "./components/PersonList";

function App() {
  const personsArray = [
    {
      name: "walter",
      age: 14
    },
    {
      name: "white",
      age: 42
    },
    {
      name: "junior",
      age: 18
    }
  ]
  return (
    <div className='container'>
      
    <PersonList persons={personsArray} />
    </div>
  );
}

export default App;
