type OscarProps = {
  children: React.ReactNode
}

// Expected Props Example:
//<Oscar>
//  <AnotherElement></AnotherElement>
//</Oscar>

function Oscar(props: OscarProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Oscar