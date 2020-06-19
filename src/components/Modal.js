import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { Content, PrimaryButton } from "./";
import { typeScale } from "../utilities";
import { Illustrations, CloseIcon } from "../assets";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 10;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110%;
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  border-radius: 3%;
`;

const WelcomeHeader = styled.h3`
  font-size: ${typeScale.header3};
  text-align: center;
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
        <picture>
          <img
            src={Illustrations.Welcome}
            alt="Site welcome"
            aria-hidden="true"
          />
        </picture>
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
