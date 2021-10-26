import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/pagehome/PageHome";
import receita from "./pages/pagereceita/PageReceita";
import votacao from "./pages/pagevotar/PageVotar";


function Routes() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/receita" component={receita} />
          <Route path="/votacao" component={votacao} />
        </Switch>
      </>
    );
  }
  
  export default Routes;