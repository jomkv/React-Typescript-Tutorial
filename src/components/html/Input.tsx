type InputProps = React.ComponentProps<"input">

function Input(props: InputProps) {
  return (
    <input {...props} />
  )
}

export default Input