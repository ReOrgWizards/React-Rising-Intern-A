import React from "react";
import Image1 from "../../assets/images/mockup.png";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import Button from "../button/Button";

const MasterBanner = () => {
  return (
    <section className="mb-52 flex w-full  gap-12  ">
      <div>
        <div className="relative left-11 top-[60px] z-[1] h-[380px] w-[495px] rotate-[8deg] rounded-[28px] ">
          <img
            className="h-full w-full rounded-[28px]"
            src={Image1}
            alt="septic_img"
          />
        </div>
        <div className="absolute -left-[40px] top-[250px] z-20 inline-flex flex-col items-center gap-2 px-12 py-12 font-bold text-blue-500">
          <Button
            type="tertiary"
            label=" +977 980345566"
            icon={<IoIosCall />}
          ></Button>
          <Button
            type="tertiary"
            label=" +977 980345566"
            icon={<IoIosCall />}
          ></Button>
          <Button
            type="tertiary"
            label=" +977 980345566"
            icon={<IoIosCall />}
          ></Button>
        </div>
        <div className="absolute left-[60px] top-[142px] flex h-[380px] w-[495px] -rotate-[8deg] rounded-[28px] bg-blue-400"></div>
      </div>
      <div className="mt-6 flex w-[35rem] flex-col">
        <h1 className="font-lato text-[20px] font-medium text-blue-400">
          BIO FARM NEPAL
        </h1>
        <h2 className="mt-8 w-full text-[48px] font-normal leading-[60px]">
          SEPTIC SOLUTIONS FOR A HEALTHY NEPAL
        </h2>
        <p className="mt-16 w-full font-lato text-[14px] font-normal">
          Establishing Clean Environments, One Septic Solution at a Time.
          Proudly Serving Kathmandu, Lalitpur, and Bhaktapur Communities for
          Reliable Waste Management.
        </p>
        <div className="mt-11 flex items-center justify-between">
          <Button
            icon={<IoIosCall className="h-5 w-5" />}
            label="Call us"
            type="primary"
          />
          <Button
            icon={<IoMdMail className="h-5 w-5" />}
            label="Mail us"
            type="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default MasterBanner;
