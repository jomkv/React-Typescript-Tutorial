import { useReducer } from "react"

type CounterState = {
  count: number
}

type CounterAction = {
  type: string,
  payload: number
}

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
  switch(action.type) {
    case "increment":
      return {count: state.count + action.payload}
    case "decrement":
      return {count: state.count - action.payload}
    default:
      return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div>Count: {state.count}</div> 
      <button onClick={() => dispatch({type: "increment", payload: 10})}>
        Increment by ten
      </button>
      <button onClick={() => dispatch({type: "decrement", payload: 10})}>
        Decrement by ten
      </button>
    </>
    
  )
}

export default Counter