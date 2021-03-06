import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/pagehome/PageHome";
import receita from "./pages/pagecadastro/PageCadastroReceitas";
import votacao from "./pages/pagevotar/PageVotar";
import editar from "./pages/pageeditareceita/PageEditar";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/receita" component={receita} />
        <Route path="/votacao" component={votacao} />
        <Route path="/editar" component={editar} />
      </Switch>
    </>
  );
}

export default Routes;
