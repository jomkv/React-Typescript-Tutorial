import { useRef, useEffect } from "react"

function DomRef() {
  const InputRef = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    InputRef.current.focus()
  }, [])

  return (
    <>
      <input type="text" ref={InputRef}/>
    </>
  )
}

export default DomRef