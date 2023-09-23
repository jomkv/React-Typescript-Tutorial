type ButtonProps = {
  variant: 'primary' | 'secondary'
} & React.ComponentProps<"button">

function Button({variant, children, ...rest}: ButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button