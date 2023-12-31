import { useReducer } from "react"

type CounterState = {
  count: number
}

type UpdateAction = {
  type: "increment" | "decrement",
  payload: number
}

type ResetAction = {
  type: "reset"
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
  switch(action.type) {
    case "increment":
      return {count: state.count + action.payload}
    case "decrement":
      return {count: state.count - action.payload}
    case "reset":
      return {count : 0}
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
      <button onClick={() => dispatch({type: "reset"})}>
        Reset
      </button>
    </>
    
  )
}

export default Counter