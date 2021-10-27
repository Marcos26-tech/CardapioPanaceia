import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.nav`
  margin-top: 2rem;
  width: 100%;
  height: 5rem;
  background-color: black;
  /* height: 100%; */
  /* padding: 0 10%; */
  ul {
    height: 100%;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
  }

  li {
    margin: 0 1rem;
    /* width: 5rem; */
    line-height: 2rem;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover,
  a:active,
  a.active {
    color: #64a546;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid #64a546;
  }
`;

const Menu = () => {
  let isLogado = window.localStorage.getItem("isLogado");

  return (
    <>
      <StyledMenu>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/votacao">Votação do Cardápio</Link>
          </li>

          <li>
            {/* {isLogado ? ( */}
            <Link to="/receita">Cadastrar Receitas</Link>
            {/* ) : (
              <Link to="/"></Link>
            )} */}
          </li>

          <li>
            {/* {isLogado ? ( */}
            <Link to="/editar">Editar Receitas</Link>
            {/* ) : (
              <Link to="/"></Link>
            )} */}
          </li>
        </ul>
      </StyledMenu>
    </>
  );
};

export default Menu;
