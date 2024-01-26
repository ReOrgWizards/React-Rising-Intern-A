import React from "react";

const ProgressCard = () => {
  return (
    <section className="flex items-center justify-center">
      <div className=" flex  h-36 w-[850px] items-center justify-evenly rounded-lg border-2 border-blue-200 bg-grey-100 align-middle">
        <div className="flex flex-col items-center justify-center gap-4 font-comfortaa ">
          <span className="text-5xl text-blue-400">10+</span>
          <span className="text-sm text-grey-700">Years of experience</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4  font-comfortaa  ">
          <span className="text-5xl text-blue-400">252+</span>
          <span className="text-sm text-grey-700">Projects completed</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4   font-comfortaa ">
          <span className="text-5xl text-blue-400"> 1000+</span>
          <span className="text-sm text-grey-700">Satisfied customer</span>
        </div>
      </div>
    </section>
  );
};

export default ProgressCard;
