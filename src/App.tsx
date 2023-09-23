// Dependencies or External Imports


// Components
import Button from "./components/html/Button";
import Input from "./components/html/Input";

function App() {
  
  return (
    <div className='container'>  
      <Button variant="secondary" onClick={() => {console.log("click")}}>asd</Button>
      <Input type="text" placeholder="input here"/>
    </div>
  );
}

export default App;
