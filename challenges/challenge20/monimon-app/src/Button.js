import { useEffect } from "react";

// passing the props from button (text, whenClicks)
const Button = ({text, handleClick}) => {

	return <button onClick={handleClick}>{text}</button>;


}

//exporting the module
export default Button;