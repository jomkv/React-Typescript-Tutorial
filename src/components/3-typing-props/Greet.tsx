type GreetProps = {
    name: string,
    age: number
}

// Expected Props Example:
// <Greet name="your_name" age={your_age} />

function Greet(props: GreetProps) {
  return (
    <h1>Hello {props.name}! you are currently {props.age} years old. </h1>
  )
}

export default Greet