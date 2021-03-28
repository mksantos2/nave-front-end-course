import logo from './logo.svg';
import logoCat from './Cat-icon.png'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


// import modules
import Button from "./Button"
import Anchor from "./Anchor"



import React, { useState, useRef, useEffect } from "react";



const Home = () => { 
	
  // anchor const variable
  const [linkTitle, setLinkTitle] = useState("Linkzaum");

  // button text prop 
  const [textButton, setTextButton] = useState("Butao");

  // button hidden cat 
  const catText = "Meow aperte!";

  // title text for h1
  const [title, setTitle] = useState("Eu acho que vi um gatinho...");

  // count how many times press the button
  const [pressCount, setPressCount] = useState(0);

  // status of link, to print <div> on the page if anchor changes
  const [linkStatus, setLinkStatus] = useState(false);

  // var to control if is the initial render 
  const initialRender = useRef(true);

  //print when is the initial render
  useEffect(() => {
    console.log("Montagem");
  }, [])

  // useEffect to print when anchor changes
  useEffect(() => {
    // if is the initial render, it just will skip
    if (initialRender.current) {
      // noticing that initial render is over
      initialRender.current = false;
    } else {
      // after the initial render, it will print on console the message
      console.log("Texto do linkzaum mudou!");
      // flag to activate the <div> on the page
      setLinkStatus(true);
    }
  }, [linkTitle]); // passing the linkTitle, its possible to know that when this variable changed



  // function that controls onClick button
  const click = () => {
    // when button has been clicked then add +1 on the counter
    setPressCount(pressCount + 1);
    // change the anchor text
    setLinkTitle("Linkzinho");
    //console.log("Count: ", pressCount);
    
  }




	return (
	<div className="App">
      <header className="App-header">
        
        {/* short circuit to show the div only when linkStatus changes */}
        {linkStatus && <div> Olha o console e aperte mais uma vez!</div>}

        {/*} short circuit to show the h1 only when pressCount is pressed again*/}
        {(pressCount>1) && <h1>{title}</h1>}

        {/* hidden cat image if count press button > 2 */}
        {(pressCount>2) && <img src={logoCat} alt="Logo" />}

        {/* to hide react logo */}
        {(pressCount<3) && <img src={logo} className="App-logo" alt="logo" />}

        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/*my anchor from module Anchor.js*/}
        <Anchor text={linkTitle}/>
        
        {/*my button from module Button.js*/}
        <Button text={(pressCount < 2) ? textButton : catText} handleClick={click}/>
        <Link to="/comments">Comments</Link>
        
      </header>
    </div>

	);
}

export default Home;