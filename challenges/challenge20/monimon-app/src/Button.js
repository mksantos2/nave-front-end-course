
const Button = ({text, handleClick}) => {
	console.log(handleClick);
	return <button onClick={handleClick}>{text}</button>;

}

export default Button;