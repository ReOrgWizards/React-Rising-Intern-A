import Image2 from "../../assets/images/tank.png";
import Button from "../button/Button";
import { FaArrowRight } from "react-icons/fa";
import Card from "./Card";

const CardItem = () => {
  return (
    <div className="z-50 w-80 rounded-lg bg-grey-300 shadow-xl shadow-blue-700">
      <div className="flex flex-col items-center justify-center rounded-lg  border-2 border-blue-400 bg-[white] px-6 py-6 text-left">
        <img
          className="h-[126px] w-full overflow-hidden rounded-lg "
          src={Image2}
          alt="image"
        />

        <h1 className="m-4 h-full w-full justify-center text-xl text-blue-500">
          Septic Tank Pumping
        </h1>
        <p className="text-sm">
          Regular pumping and cleaning of septic tanks to remove accumulated
          sludge and ensure proper functioning.
        </p>
        <div className=" flex items-center justify-center gap-[12px]">
          <Button
            className=" "
            type="quaternary"
            icon={<FaArrowRight />}
            label="View Details"
          ></Button>
          <span>
            <h1 className="rounded-3xl bg-grey-200 p-2 text-3xl text-grey-400">
              01
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
