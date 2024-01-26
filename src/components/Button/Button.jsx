import React from "react";

const Button = ({ icon, label, type }) => {
  const base =
    "items-center flex justify-center gap-4 rounded-[28px] font-comfortaa font-medium   ";

  const btnStyle = {
    primary:
      base +
      "bg-blue-500 text-grey-100 h-[50px] w-[210px] border-[1px] border-[#1c4688] ",
    secondary:
      base +
      "bg-transparent text-blue-500 h-[50px] w-[210px] border-[1px] border-[#1c4688] ",
    tertiary: base + "bg-grey-100/60 px-2 py-2 ",
    quaternary:
      base +
      "bg-blue-500 w-36 h-8 p-[12px] text-sm flex-row-reverse text-center justify-center ",
    arw_btn: base + "rounded-full h-4 w-4 ",
  };

  return (
    <button className={btnStyle[type]}>
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default Button;
