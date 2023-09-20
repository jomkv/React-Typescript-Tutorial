type statusProps = {
    status: "loading" | "success" | "error"
}

// Expected Props Example:
// <Status status="success" />

function Status(props: statusProps) {
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
    <h1>Status: {props.status}</h1>
  )
}

export default Status