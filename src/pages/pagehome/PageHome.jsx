import React from "react";
import imgTacos from "../../assets/img/receita1.jpg";
import CardContainer from "../../components/cardcontainer/CardContainer";
import CardReceita from "../../components/cardcontainer/CardReceita";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";

const Home = () => {
  const receitas = [
    {
      foto: imgTacos,
      nome: "TACOS DE CARNE MOÍDA",
      receita:
        "INGREDIENTES: • 3/4 xícara de caldo de carne bovina • 1 1/2 colheres de amido de milho • 3 dentes de alho picados • 1/2 cebola pequena picada • 1 (4 onças) pode cortar chiles verdes",
      calorias: 200,
    },
  ];
  return (
    <>
      <DivHome>
        <H>
          <Span>As Receitas TOP da Galera!</Span>
        </H>
        <CardContainer>
          {receitas.map((receita) => (
            <CardReceita
              foto={receita.foto}
              nome={receita.nome}
              receita={receita.receita}
              calorias={receita.calorias}
            />
          ))}
        </CardContainer>
      </DivHome>
    </>
  );
};

export default Home;
