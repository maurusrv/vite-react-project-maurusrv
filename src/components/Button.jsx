const Button = (props) => { // parameters, arguments
  const { label, onClick, isHidden } = props

  if (isHidden) return null

  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button
