import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { Content, PrimaryButton } from "./";
import { typeScale } from "../utilities";
import { Illustrations, CloseIcon } from "../assets";

const ModalWrapper = styled.div`
  width: 800px;
  height: 580px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const WelcomeHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const WelcomeText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

const modalRoot = document.getElementById("modal");

export const Modal = props => {
  const { showModal, setShowModal } = props;

  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <Content>
      <ModalWrapper>
        <img
          src={Illustrations.Welcome}
          alt="Site welcome"
          aria-hidden="true"
        />
        <WelcomeHeader>Hey there, welcome to my site!</WelcomeHeader>
        <WelcomeText>
          I made this site with the intent to introduce myself, as well as
          showcase my front-end development skills.
        </WelcomeText>
        <PrimaryButton
          onClick={() => setShowModal(!showModal)}
          aria-label="Close modal"
        >
          I'm in, show me what you've got!
        </PrimaryButton>
        <CloseModalButton
          onClick={() => setShowModal(!showModal)}
          aria-label="Close modal"
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </Content>,
    elRef.current
  );
};
