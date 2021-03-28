
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';




import Home from "./routes/Home";
import Comments from "./routes/Comments";

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
