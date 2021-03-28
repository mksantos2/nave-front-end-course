
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';




import Home from "./Home";
import Comments from "./Comments";

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
        </Switch>

      </Router>
      
      );
}

export default App;
