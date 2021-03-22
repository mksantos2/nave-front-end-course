import logo from './logo.svg';
import './App.css';

import {useState} from "react";

import Button from "./Button"


function App() {

  const [linkTitle, setLinkTitle] = useState("Linkzaum");

  const [textButton, setTextButton] = useState("botao");

  //const click = false;
  const click = () => {
    setLinkTitle("Linkzinho");
    console.log("Clicou!");
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

        <a>{linkTitle}</a>
        <Button text={textButton} handleClick={click}/>
        
      </header>
    </div>
  );
}

export default App;
