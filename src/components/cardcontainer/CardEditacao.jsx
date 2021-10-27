import React from "react";
import styled from "styled-components";
import Modal from "./MostraModal"

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

function showModal(Modal) {
  Modal.showModal();
}


const CardEditar = (props) => {
  return (
    <Produto>
      <div>
        <img src={props.foto} alt={props.nome} />
        <span>{props.id}</span>
        <button onClick={() => this.setState({showModal: true})}>Add Work Log</button>
        <button onClick={showModal}>Editar</button>
        <h3>{props.nome}</h3>
        <p>
          <em>{props.calorias} kcal</em>
        </p>
        <p>{props.receita}</p>
      </div>
    </Produto>
  );
};

export default CardEditar;