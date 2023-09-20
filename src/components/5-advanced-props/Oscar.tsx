type oscarProps = {
  children: React.ReactNode
}

function Oscar(props: oscarProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Oscar