type TextProps = {
  children: string
}

// Expected Props Example:
// <Text>Hello world</Text>

function Text(props: TextProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Text