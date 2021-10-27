import React from 'react'
import {
  Container,
  Section,
  Span,
  StyledQuestionario,
  FormButton,
  Modal,
  ModalContent2021,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "../../assets/style/StyledModal";


function MostraModal() {

  function enviarReceita() {}


  return (
  <>
    <Modal>
      <ModalContent2021>
        <ModalHeader>
          <Span>
            <h3>Edite</h3>
          </Span>
        </ModalHeader>

        <Container>
          <ModalBody>
            <Section>
              <StyledQuestionario>

              </StyledQuestionario>
            </Section>
          </ModalBody>

          <ModalFooter>
            <FormButton onClick={() => enviarReceita()}>
              salvar
            </FormButton>
          </ModalFooter>
        </Container>
      </ModalContent2021>
    </Modal>
  </>
);
};

export default MostraModal;
