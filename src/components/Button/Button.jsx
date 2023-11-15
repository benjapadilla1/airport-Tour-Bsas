
const Button = ({ onClick, children, tailwindClassName, backgroundColor, textColor }) => {
  return (
    <button onClick={onClick} className={tailwindClassName} style={{backgroundColor, color: textColor}} >{children}</button>
  )
}

export default Button