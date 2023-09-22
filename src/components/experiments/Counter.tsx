import { useContext } from "react"
import { CounterContext } from "./CounterContex"

function Counter() {
  const counterContext = useContext(CounterContext)

  const handleChange = (changeType: string) => {
    switch(changeType) {
      case "increment":
        return counterContext.setCount(counterContext.count + 10)
      case "decrement":
        return counterContext.setCount(counterContext.count - 10)
      case "reset":
        return counterContext.setCount(0)
      default:
        return
    }
  }

  return (
    <>
      <div>Count: {counterContext.count}</div>
      <button onClick={() => handleChange("increment")}>Increment by 10</button>
      <button onClick={() => handleChange("decrement")}>Decrement by 10</button>
      <button onClick={() => handleChange("reset")}>Reset</button>
    </>
  )
}

export default Counter