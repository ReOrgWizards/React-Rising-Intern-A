import React from "react";
import Image1 from "../../assets/images/mockup.png";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
const MasterBanner = () => {
  return (
    <>
      {" "}
      <div className="flex w-full gap-12  p-4 ">
        <div style={{ width: "50%" }}>
          <div className="relative left-11 top-[60px] z-[1] h-[380px] w-[495px] rotate-[6deg] rounded-[28px] bg-[#2d68c4] ">
            <img
              className="hidden h-full w-full rounded-[28px]"
              src={Image1}
              alt="septic_img"
            />
          </div>
          <div className="absolute left-[60px] top-[142px] flex h-[380px] w-[495px] -rotate-[8deg] rounded-[28px] bg-[#2d68c4]"></div>
        </div>
        <div className="mt-6 flex w-[50%] flex-col">
          <h1 className="font-lato text-[20px] font-medium decoration-[#2d68c4]">
            BIO FARM NEPAL
          </h1>
          <h2 className="mt-8 w-full text-[48px] font-normal leading-[60px]">
            SEPTIC SOLUTIONS FOR A HEALTHY NEPAL
          </h2>
          <p className="mt-[30px] text-left font-lato text-[14px] font-normal">
            Establishing Clean Environments, One Septic Solution at a Time.
            Proudly Serving Kathmandu, Lalitpur, and Bhaktapur Communities for
            Reliable Waste Management Establishing Clean Environments, One
            Septic Solution at a Time. Proudly Serving Kathmandu, Lalitpur, and
            Bhaktapur Communities for Reliable Waste Management
          </p>
          <div className="mt-11 flex items-center justify-around">
            <div className="h-[50px] w-[250px] items-center justify-center gap-4 rounded-[28px] bg-[#1c4688] font-comfortaa font-medium">
              <span>
                <IoIosCall className="h-5 w-5" />
              </span>
              Call us
            </div>
            <div className="flex  h-[50px] w-[250px] items-center justify-center gap-4 rounded-[28px] border-solid border-[#1c4688] bg-white text-center font-comfortaa font-medium text-[#1c4688]">
              <span>
                <IoMdMail className="h-5 w-5" />
              </span>
              Mail us
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterBanner;
