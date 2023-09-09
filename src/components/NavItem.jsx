

const NavItem = (props) => {
  const { label, className, onClick } = props

  return (
    <li
      // id={label}
      className={`border-2 ${className}`}
      onClick={onClick}
    >
      {label}
    </li>   
  )
}


export default NavItem
