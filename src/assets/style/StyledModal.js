import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 950px;
  background-color: #fff;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

export const ModalContent2 = styled.div`
  width: 100px;
  background-color: #fff;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
`;

export const ModalContent2021 = styled.div`
  width: 59rem;
  background-color: #fff;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  margin: 0;
`;

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
export const ModalFooter = styled.div`
  padding: 10px;
`;

export const CheckImg = styled.div`
  padding: 5px;
  margin: 5px;
  input[type="checkbox"][id^="checkbox"] {
    display: none;
  }
  label {
    border: 1px solid #fff;
    padding: 10px;
    display: block;
    position: relative;
    margin: 10px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  label::before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 28px;
    transition-duration: 0.4s;
    transform: scale(0);
  }

  label img {
    height: 100px;
    width: 150px;
    border-radius: 4px;
    transition-duration: 0.2s;
    align-items: center;
    justify-content: center;
  }

  input[type="checkbox"]:checked + label {
    border-color: #ddd;
  }

  input[type="checkbox"]:checked + label::before {
    content: "✓";
    background-color: rgb(14, 192, 118);
    transform: scale(1);
  }

  input[type="checkbox"]:checked + label img {
    height: 100px;
    width: 150px;
    transform: scale(1);
    box-shadow: 0 0 5px #1d1d1d;
    z-index: -1;
  }
  span {
    font-family: Italianno;
    font-size: 35px;
    margin: 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FormButton2 = styled.button`
  display: inline-block;
  margin: 0 0 5px 5px;
  width: 25%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(8, 8, 8);
  background-color: rgb(14, 192, 118);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgb(41, 231, 152);
    transform: translate(0, -5px);
  }
  @media (max-width: 783px) {
    width: 50%;
  }
`;

export const FormButton3 = styled.button`
  display: inline-block;
  margin: 0 0 5px 5px;
  width: 25%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(8, 8, 8);
  background-color: rgb(178, 224, 205);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgb(110, 241, 187);
    transform: translate(0, -5px);
  }
  @media (max-width: 783px) {
    width: 50%;
    margin: 10px;
  }
`;


//inicio style da pagina home//
export const Container = styled.section`
  background: rgb(247, 246, 246);
  opacity: 98%;
  border-radius: 5px;
  padding: 1rem 3rem 5rem;
  margin: 3rem 8% 5rem;
  height: 100%;
  text-align: center;
  justify-content: center;
  @media (max-width: 789px) {
    margin: 3rem 3% auto;
    padding: 10px;
    height: 100%;
  }
`;

export const Section = styled.section`
  margin: 2px 10px 10px;
  padding: 2px;
  text-align: center;
  justify-content: center;
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #024136;
    text-align: center;
    margin: 0 0 20px 0;
  }
  @media (max-width: 789px) {
    h3 {
      font-size: 13px;
    }
  }
`;

export const Title = styled.h1`
  font-family: Italianno, cursive;
  margin: 1px;
  padding: 1px;
  font-size: 55px;
  font-weight: bold;
  color: #024136;
  text-align: center;
  justify-content: center;
  @media (max-width: 789px) {
    font-size: 28px;
  }
`;

export const StyledContainer = styled.section`
  display: flex;
`;

//inicio style da pagina carrocel//
export const StyledCarrocelContainer = styled.div`
  height: 40rem;
  width: 100%;
  padding: 0 20px 0;
  margin: 20px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 789px) {
    padding: 2px;
    margin: 2px;
  }
`;

export const StyledImageContainer = styled.div`
  width: 80%;
  height: 109%;
`;

export const StyledArrowContainer = styled.div`
  font-size: 35px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #305c54;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
  @media (max-width: 789px) {
    width: 99%;
    height: 95%;
  }
`;

export const FormButton = styled.button`
  display: inline-block;
  width: 25%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 234, 0);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

//inicio style da pagina PageQuestionario
export const Span = styled.span`
  font-weight: bold;
  color: rgb(12, 139, 1);
  text-align: center;
  margin: 2px;
`;

export const StyledQuestionario = styled.div`
  border: 1px solid #56565656;
  border-radius: 5px;
  margin: 5px 0 12px;
  padding: 0 15px 20px;
  font-size: 14.5px;
  background-color: rgb(247, 246, 246);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);

  h2 {
    font-size: 16px;
    text-align: center;
    color: rgb(12, 139, 1);
  }
  input[type="radio"]:checked {
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: 5px solid;
  }
  input {
    margin-left: 12px;
    position: relative;
    width: 14px;
    height: 14px;
  }
`;
