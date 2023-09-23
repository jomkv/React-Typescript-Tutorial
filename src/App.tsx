// Dependencies or External Imports


// Components
import {List} from "./components/generics/List";

function App() {
  
  return (
    <div className='container'>  
      <List 
        items={[
          {
            id: 1,
            name: "Jom",
          },
          {
            id: 2,
            name: "Ye",
          },
          {
            id: 3,
            name: "Gra",
          }
        ]} 
        onClick={(item) => {console.log(item)}}
      />
    </div>
  );
}

export default App;
