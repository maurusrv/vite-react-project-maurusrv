

const Input = (props) => {
  const { label, type, id, value, onChange } = props // is an object

  return (
    <>
      <label>{label}</label>
      <input 
        className="border-2"
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
