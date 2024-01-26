import React from "react";
import CardItem from "./CardItem";

const Card = () => {
  return (
    <section className="absolute left-24 top-[21rem] flex gap-12">
      <CardItem />
      <CardItem />
      <CardItem />
    </section>
  );
};

export default Card;
