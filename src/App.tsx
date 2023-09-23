// Dependencies or External Imports


// Components
import {List} from "./components/generics/List";

function App() {
  
  return (
    <div className='container'>  
      <List items={["a", "b", "c", "d"]} onClick={(item) => {console.log(item)}}/>
      <List items={[1, 2, 3, 4]} onClick={(item) => {console.log(item)}}/>
      <List 
        items={[
          {
            name: "Jom",
          },
          {
            name: "Ye",
          },
          {
            name: "Gra",
          }
        ]} 
        onClick={(item) => {console.log(item)}}
      />
    </div>
  );
}

export default App;
