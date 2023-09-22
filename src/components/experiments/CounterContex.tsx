import { createContext, useState } from "react"

type CounterContextProviderProps = {
  children: React.ReactNode
}

type CounterContextType = {
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export const CounterContext = createContext({} as CounterContextType)

function CounterContextProvider({ children }: CounterContextProviderProps) {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={{count, setCount}}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider