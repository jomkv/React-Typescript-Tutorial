type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

// Expected Props Example:
// <Button handleClick={(event, id) => {console.log("button clicked", event, id)}} /> 

function Button(props: ButtonProps) {
  return (
    <button onClick={(event) => {props.handleClick(event, 1)}}>Click me</button>
  )
}

export default Button