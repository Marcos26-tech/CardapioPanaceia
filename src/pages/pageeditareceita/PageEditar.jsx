import React from "react";
import imgTacos from "../../assets/img/receita1.jpg";
import imgMacarrao from "../../assets/img/receita2.jpg";
import imgAlmondegas from "../../assets/img/receita3.jpg";
import ReceitaContainer from "../../components/cardcontainer/CardContainer";
import CardEditacao from "../../components/cardcontainer/CardEditacao";
import { DivHome, H, Span } from "../../assets/style/StyleGloblal";

function PageEditar() {
  
  const receitas = [
    {
      foto: imgTacos,
      nome: "TACOS DE CARNE MOÍDA",
      receita:
        "INGREDIENTES: • 3/4 xícara de caldo de carne bovina • 1 1/2 colheres de amido de milho • 3 dentes de alho picados • 1/2 cebola pequena picada • 1 (4 onças) pode cortar chiles verdes",
      calorias: 200,
    },

    {
      foto: imgMacarrao,
      nome: "Macarrão",
      receita:
        "INGREDIENTES: • 3/4 xícara de caldo de carne bovina • 1 1/2 colheres de amido de milho • 3 dentes de alho picados • 1/2 cebola pequena picada • 1 (4 onças) pode cortar chiles verdes",
      calorias: 200,
    },

    {
      foto: imgAlmondegas,
      nome: "Almondegas",
      receita:
        "INGREDIENTES: • 3/4 xícara de caldo de carne bovina • 1 1/2 colheres de amido de milho • 3 dentes de alho picados • 1/2 cebola pequena picada • 1 (4 onças) pode cortar chiles verdes",
      calorias: 200,
    },
  ];
  return (
    <>
      <DivHome>
        <H>
          <Span>Vote nas suas receitas favoritas!</Span>
        </H>
        <ReceitaContainer>
          {receitas.map((receita) => (
            <CardEditacao
              foto={receita.foto}
              nome={receita.nome}
              calorias={receita.calorias}
              receita={receita.receita}
            />
          ))}
        </ReceitaContainer>
      </DivHome>
    </>
  );
}

export default PageEditar;
