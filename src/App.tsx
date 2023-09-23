// Dependencies or External Imports


// Components
import Text from "./components/polymorphic/Text";

function App() {
  
  return (
    <div className='container'>  
      <Text as="h1" size="sm" color="primary" >H1</Text>
      <Text as="p">Paragraph</Text>
      <Text as="label" htmlFor="someId">Label</Text>
    </div>
  );
}

export default App;
