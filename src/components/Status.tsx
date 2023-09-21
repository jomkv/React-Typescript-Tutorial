type StatusProps = {
    status: "loading" | "success" | "error"
}

// Expected Props Example:
// <Status status="success" />

function Status({status}: StatusProps) {
  let message

  if(status === "loading") {
    message = "Loading..."
  } 
  else if(status === "success") {
    message = "Data fetch successful"
  }
  else if(status === "error") {
    message = "Error fetching data"
  }

  return (
    <h1>Status: {message}</h1>
  )
}

export default Status