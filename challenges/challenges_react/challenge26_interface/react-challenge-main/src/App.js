import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useState } from "react";


import CreatePost from "./routes/CreatePost";
import ListPosts from "./routes/ListPosts";
import EditPost from "./routes/EditPost";
import Home from "./routes/Home";



import Button from '@material-ui/core/Button';
import { ThemeProvider }  from "styled-components";
import { Global } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/Themes";





import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";

const App = () => {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return(

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
    <Global/>

    <Button variant="contained" color="default" onClick={themeToggler}>Modo Noturno</Button>

    <Router>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <div className="container">
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={CreatePost} />
        <Route path="/list" component={ListPosts} />
        <Route path="/edit" component={EditPost} />
      </Switch>
    </div>
  </Router>
  </>

  </ThemeProvider>


  );
};

export default App;
