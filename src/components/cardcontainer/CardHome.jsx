import React from "react";
import styled from "styled-components";

const Produto = styled.div`
  background-color: wheat;
  border-radius: 10px;
  width: 30%;

  padding: 1.4rem;
  margin: 1rem;

  h4 {
    color: #042b5f;
  }

  img {
    width: 100%;
  }
`;

const CardHome = (props) => {
  return (
    <Produto>
      <div>
        <img src={props.foto} alt={props.nome} />
        <h3>{props.nome}</h3>
        <p>
          <em>{props.calorias} kcal</em>
        </p>
        <p>{props.receita}</p>
      </div>
    </Produto>
  );
};

export default CardHome;