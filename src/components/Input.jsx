

const Input = (props) => {
  const { label, type, id, value, onChange } = props // is an object

  return (
    <>
      <label>{label}</label>
      <input 
        id={id} 
        title={label} 
        type={type}
        value={value}
        onChange={onChange}
      /> 
    </>
  )
}

export default Input
