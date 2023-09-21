type InputProps = {
  value: string,
}

// Expected Props Example:
// <Input value="" handleChange={(event) => {console.log(event)}} />

function Input(props: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  return (
    <input type="text" value={props.value} onChange={handleInputChange} placeholder="Input text here"></input>
  )
}

export default Input