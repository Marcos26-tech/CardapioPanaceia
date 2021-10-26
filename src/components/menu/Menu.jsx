import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
        <Nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/">Votação do Cardápio</Link>
            </li>
            <li>
              {isLogado ? (
                <Link to="/">Cadastrar Receitas</Link>
              ) : (
                <Link to="/"></Link>
              )}
            </li>
            <li>
              {isLogado ? (
                <Link to="/">Editar Receitas</Link>
              ) : (
                <Link to="/"></Link>
              )}
            </li>
          </ul>
        </Nav>
      </>
    )
}

export default Menu;
