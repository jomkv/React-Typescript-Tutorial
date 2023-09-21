type ContainerProps = {
  styles?: React.CSSProperties
}

// Expected Props Example:
{/* <Container styles={{border: '1px solid black}}/>  */}

function Container(props: ContainerProps) {
  return (
    <div style={props.styles}>Container</div>
  )
}

export default Container