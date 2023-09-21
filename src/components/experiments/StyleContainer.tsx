type StyleContainerProps = {
  styles?: React.CSSProperties,
  children: React.ReactNode
}

// Expected Props Example:
// <StyleContainer styles={{color: 'red'}}>
//   <Text>Hello world</Text>
// </StyleContainer>

function StyleContainer(props: StyleContainerProps) {
  return (
    <div style={props.styles}>
      {props.children}
    </div>
  )
}

export default StyleContainer