import { useRef, useEffect } from "react"

type InputProps = React.ComponentProps<"input">

function Input(props: InputProps) {
  const InputRef = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    InputRef.current.focus()
  }, [])

  return (
    <input {...props} ref={InputRef} />
  )
}

export default Input