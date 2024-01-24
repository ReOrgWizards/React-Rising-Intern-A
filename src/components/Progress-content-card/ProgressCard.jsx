import React from "react";

const ProgressCard = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="bg-grey-100 absolute  flex h-36 w-[850px] items-center justify-evenly rounded-lg border-2 border-blue-200 align-middle">
        <div className="flex flex-col items-center justify-center gap-4 font-comfortaa ">
          <span className="text-5xl text-blue-400">10+</span>
          <span className="text-grey-700 text-sm">Years of experience</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4  font-comfortaa  ">
          <span className="text-5xl text-blue-400">252+</span>
          <span className="text-grey-700 text-sm">Projects completed</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4   font-comfortaa ">
          <span className="text-5xl text-blue-400"> 1000+</span>
          <span className="text-grey-700 text-sm">Satisfied customer</span>
        </div>
      </div>
    </section>
  );
};

export default ProgressCard;
