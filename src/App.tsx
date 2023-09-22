// Dependencies or External Imports


// Components
import Counter from "./components/experiments/Counter"
import CounterContextProvider from "./components/experiments/CounterContex"

function App() {
  
  return (
    <div className='container'>  
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    </div>
  );
}

export default App;
