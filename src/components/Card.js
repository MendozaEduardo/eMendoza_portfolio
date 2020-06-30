import React from "react";

import { CardInfo } from "../components";

export const Card = props => {
  return (
    <div onClick={e => props.click(props.item)}>
      <img
        className="e-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
};
