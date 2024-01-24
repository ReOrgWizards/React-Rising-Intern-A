import React from "react";
import logoIcon from "../../assets/icons/logo_pro.svg";
const Header = () => {
  return (
    <div className="inline-flex h-full w-full items-center justify-between border-b-[1px] px-8 py-2">
      <div className="flex items-center justify-between">
        <div className="w-half h-12 w-12 bg-blue-400">
          <img src={logoIcon} alt="logo" />
        </div>

        <div className=" inline-flex flex-col">
          <div className="font-comfortaa text-base font-medium text-blue-400">
            Bio Farm
          </div>

          <div className="font-comfortaa text-base font-medium text-blue-400">
            Nepal
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-end gap-20 ">
        <div className="flex items-center justify-end gap-10">
          <div className="uppercase-italic text-center text-base font-semibold text-blue-700 ">
            Home
          </div>

          <div className="uppercase-italic text-center text-base font-semibold text-blue-700 ">
            About Us
          </div>

          <div className="uppercase-italic text-center text-base font-semibold text-blue-700 ">
            Services
          </div>
        </div>

        <div className="flex-end flex gap-2 rounded-3xl bg-blue-400 px-6 py-4">
          <div className="text-grey-100 text-center font-lato font-bold ">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
