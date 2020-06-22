import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { PrimaryButton } from "./";
import { typeScale, device } from "../utilities";
import { Illustrations } from "../assets";

const ModalWrapper = styled.div`
  margin: auto;
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  padding: 5%;
  border-radius: 3%;
  max-width: 1100px;
  max-height: 1000px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptopL} {
    min-width: 1000px;
    min-height: 1000px;
  }

  @media ${device.laptop} {
    min-width: 600px;
    min-height: 600px;
  }

  @media ${device.mobileS} {
    min-width: 300px;
    min-height: 300px;
  }
`;

const WelcomeHeader = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: ${typeScale.header1};
`;

const WelcomeText = styled.p`
  text-align: center;
  max-width: 80%;
  font-size: ${typeScale.header3};
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
    <ModalWrapper>
      <picture>
        <source media={device.laptopL} srcSet={Illustrations.edLg} />
        <source media={device.tablet} srcSet={Illustrations.edMd} />
        <img src={Illustrations.edSm} alt="Site welcome" />
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
        Show me what you've got!
      </PrimaryButton>
    </ModalWrapper>,
    elRef.current
  );
};
