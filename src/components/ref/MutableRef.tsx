import { useState, useRef, useEffect } from "react"

function MutableRef() {
  const [timer, setTimer] = useState(0)
  const IntervalRef = useRef<number | null>(null)

  const stopTimer = () => {
    if(IntervalRef.current) {
      window.clearInterval(IntervalRef.current)
    }
  }
  useEffect(() => {
    IntervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    return () => {
      stopTimer()
    }
  }, [])
  

  return (
    <>
      <div>Hook timer: {timer}</div>
      <button onClick={stopTimer}>Stop</button>
    </>
  )
}

export default MutableRef