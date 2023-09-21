type greetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean,
}

// Expected Props Example:
// <Greet name="your_name" isLoggedIn={true} messageCount={any_number} />
// or
// <Greet name="your_name" isLoggedIn={true} />

function Greet(props: greetProps) {
  const { messageCount = 0 } = props
  return (
    <>
      {props.isLoggedIn  
      ? <h1>Hello {props.name}! you currently have {messageCount} messages. </h1> 
      : <h1>Welcome guess</h1>}
    </>
  )
}

export default Greet