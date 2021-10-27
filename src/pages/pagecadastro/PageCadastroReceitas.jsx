import { React, useState } from "react";
import {Container, Form, Dividir, Div2, Button} from "../../assets/style/StyleGloblal";
import gif from "../../assets/img/giphy.gif"

function PageCadastroReceitas() {
  let id = "";

  const [novaReceita, setReceita] = useState({
    id: id,
    titulo: "",
    kcal: "",
    descricao: "",
  });

  const adicionarReceita = (e) => {
    e.preventDefault();
  };

  const digitacao = (e) => {
    setReceita({
      ...novaReceita,[e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <h6>Cadastre novas Receitas</h6>
      <img src={gif} alt="criando receitas" />
      <Form onSubmit={adicionarReceita}>
        <Dividir>
          <input
            type="text"
            name="nome"
            value={novaReceita.titulo}
            onChange={digitacao}
            required
            placeholder="Digite o título da Receita"
          />
        </Dividir>
        <Dividir>
        <input
            type="text"
            name="nome"
            value={novaReceita.kcal}
            onChange={digitacao}
            required
            placeholder="Digite a quantidade de calorias desta receita"
          />
        </Dividir>

        <Div2>
          <textarea
            name="descricao"
            value={novaReceita.descricao}
            onChange={digitacao}
            rows="4"
            placeholder="Escreva a receita aqui..."
          />
        </Div2>
        <Button type="submit">Criar Receitas</Button>
      </Form>
    </Container>
  );
}

export default PageCadastroReceitas;
