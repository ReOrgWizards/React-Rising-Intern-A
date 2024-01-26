import React from "react";
import Card from "../Cards/Card";
import CardItem from "../Cards/CardItem";

const OurServices = () => {
  return (
    <>
      <div className="bg-oppSimpleGradient  flex flex-col items-center justify-center gap-2 px-16 py-8 text-center ">
        <h1 className="  font-comfortaa text-4xl font-bold uppercase text-grey-100">
          Our Services
        </h1>
        <p className="font-md w-[60%] font-lato text-[24px] font-normal leading-[20px] text-grey-100">
          <span>Expert Care for Your Septic System:</span> From Regular
          Maintenance to Emergency Repairs, Trust Us for Reliable, Hassle-Free
          Solutions
        </p>
        <div className="flex w-full items-center justify-between px-12 py-8 ">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </>
  );
};

export default OurServices;
