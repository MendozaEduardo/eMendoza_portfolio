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
  max-width: 95%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    max-width: 1000px;
    max-height: 1000px;
  }

  @media ${device.tablet} {
    min-width: 600px;
    min-height: 600px;
  }

  @media ${device.mobileS} {
    min-width: 200px;
    min-height: 200px;
  }
`;

const WelcomeHeader = styled.h3`
  text-align: center;
  font-weight: bold;

  @media ${device.laptop} {
    font-size: ${typeScale.header1};
  }

  @media ${device.tablet} {
    font-size: ${typeScale.header3};
  }

  @media ${device.mobileS} {
    font-size: ${typeScale.paragraph};
  }
`;

const WelcomeText = styled.p`
  text-align: center;
  max-width: 80%;

  @media ${device.laptop} {
    font-size: ${typeScale.header2}
  }

  @media ${device.tablet} {
    font-size: ${typeScale.header4};
  }

  @media ${device.mobileS} {
    font-size: ${typeScale.helperText};
  }
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
        <source media={device.mobileM} srcSet={Illustrations.edSm} />
        <img src={Illustrations.edMobile} alt="Site welcome" />
      </picture>
      <WelcomeHeader>Hello there!</WelcomeHeader>
      <WelcomeText>
        I made this site with the intent to introduce myself, as well as
        showcase my front-end development skills.
      </WelcomeText>
      <PrimaryButton
        onClick={() => setShowModal(!showModal)}
        aria-label="Close modal"
      >
        Visit site
      </PrimaryButton>
    </ModalWrapper>,
    elRef.current
  );
};
