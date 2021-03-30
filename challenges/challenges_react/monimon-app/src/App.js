
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


import Home from "./routes/Home";
import Comments from "./routes/Comments";
import CreatePost from "./routes/CreatePost";

  function App() {



    return( 
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
        </Switch>
        <ToastContainer />
      </Router>
      
      );
}

export default App;
