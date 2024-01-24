import React from "react";

const Button = ({ icon, label, type }) => {
  const base =
    "items-center flex justify-center gap-4 rounded-[28px] font-comfortaa font-medium h-[50px] w-[250px] border-2 border-[#1c4688] ";

  const btnStyle = {
    primary: base + "bg-blue-500 text-grey-100 ",
    secondary: base + "bg-transparent text-blue-500 ",
    tertiary: base + "bg-blue-400 text-grey-100 ",
  };

  return (
    <button className={btnStyle[type]}>
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default Button;
