import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Type from "./components/pages/Type";
import Crops from "./components/pages/Crops";
import Plan from "./components/pages/Plan";

import routes from "./routes";

function App() {
  useEffect(() => {
    // TODO: Check local storage if something is there, route to /plan directly‚
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path={["/", routes.type]}>
          <Type />
        </Route>
        <Route path={routes.crops}>
          <Crops />
        </Route>
        <Route path={routes.plan}>
          <Plan />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
