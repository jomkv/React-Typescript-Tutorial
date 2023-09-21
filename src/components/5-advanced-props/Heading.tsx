type HeadingProps = {
  children: string
}

// Expected Props Example:
// <Heading>Any text you want</Heading>

function Heading(props: HeadingProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Heading