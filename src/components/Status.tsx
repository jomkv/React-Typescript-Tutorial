type StatusProps = {
    status: "loading" | "success" | "error"
}

// Expected Props Example:
// <Status status="success" />

function Status(props: StatusProps) {
  let message

  if(props.status === "loading") {
    message = "Loading..."
  } 
  else if(props.status === "success") {
    message = "Data fetch successful"
  }
  else if(props.status === "error") {
    message = "Error fetching data"
  }

  return (
    <h1>Status: {message}</h1>
  )
}

export default Status