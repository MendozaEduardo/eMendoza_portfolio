import React from "react";
import { Carousel, Hero } from "../components";

export const HomePage = (props) => {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} />
      <Carousel />
    </div>
  );
};
