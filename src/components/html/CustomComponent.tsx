import Greet from "../Greet"

function CustomComponent(props: React.ComponentProps<typeof Greet>) {
  return (
    <div>{props.name}</div>
  )
}

export default CustomComponent