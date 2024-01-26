import React from "react";
import Image1 from "../../assets/images/mockup.png";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

import Button from "../button/Button";
import OurServices from "../Services/OurServices";
import Header from "../NavBar/Header";

const MasterBanner = () => {
  return (
    <>
      <section className=" my-4 flex w-full justify-center gap-28  px-24 py-12">
        <RightSection />
        <LeftSection />
      </section>
      <section className="">
        <CounterSection />
      </section>
      <OurServices />
    </>
  );
};

export default MasterBanner;

const RightSection = () => {
  return (
    <div className=" relative w-1/2 ">
      <div className=" h-[380px] w-[495px] rotate-[-8deg] rounded-[28px] bg-blue-400"></div>

      <img
        className="absolute top-0  h-[380px] w-[495px]  rotate-[8deg]  rounded-[28px]"
        src={Image1}
        alt="img"
      />
      <div className="absolute right-[26rem] top-24 flex flex-col gap-2">
        <Button type="tertiary" label="980345566" icon={<IoIosCall />}></Button>
        <Button type="tertiary" label="980345566" icon={<IoIosCall />}></Button>
        <Button type="tertiary" label="980345566" icon={<IoIosCall />}></Button>
      </div>
    </div>
  );
};

const LeftSection = () => {
  return (
    <div className="flex w-1/2 flex-col justify-around font-lato">
      <h1 className=" text-3xl text-blue-400">BIO FARM NEPAL</h1>
      <h3 className="text-5xl uppercase leading-[3.5rem]">
        Organic Solutions for
        <span className="text-blue-500"> healthy nepal</span>
      </h3>
      <p className="text-base">
        Establishing Clean Environments, One Septic Solution at a Time. Proudly
        Serving Kathmandu, Lalitpur, and Bhaktapur Communities for Reliable
        Waste Management
      </p>
      <div className="mt-11 flex items-center justify-evenly">
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
  );
};

const CounterSection = () => {
  return (
    <>
      <div className="bg-simpleGradient flex justify-center py-12  ">
        <div className="flex w-[40rem] items-center justify-between rounded-lg border-2 border-blue-200 bg-[white] px-12 py-8 text-center">
          <div>
            <span className="text-5xl font-medium text-blue-400">10+</span>
            <p className="text-md mt-3 font-comfortaa">Years of experience</p>
          </div>
          <div>
            <span className="text-5xl font-medium text-blue-400">252+</span>
            <p className="text-md mt-3 font-comfortaa">Projects completed</p>
          </div>
          <div>
            <span className="text-5xl font-medium text-blue-400">1000+</span>
            <p className="text-md mt-3 font-comfortaa">Satisfied customers</p>
          </div>
        </div>
      </div>
    </>
  );
};
