import React from "react";
import { navigate } from "@reach/router";
import { useSpring, animated } from "react-spring";
import { SecondaryButton } from "../components";

export const CardInfo = props => {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  const goToExternalSite = () => navigate(props.link);

  return (
    <animated.div className="e-card-info" style={style}>
      <p className="e-card-title">{props.title}</p>
      <p className="e-card-sub-title">{props.subTitle}</p>
      <SecondaryButton
        onClick={() => goToExternalSite()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Take Me There!
      </SecondaryButton>
    </animated.div>
  );
};
