import React from "react";
import Cardfront from "../images/bg-card-front.png";
import Cardlogo from "../images/card-logo.svg";

function Frontview({ formData }) {
  const { cardname, cardnumber, mm, yy } = formData;
  return (
    <div className="flex w-full flex-col justify-evenly">
      <img
        className="relative object-cover md:h-[10rem] xl:h-[12rem]"
        src={Cardfront}
        alt="cardfront"
      />
      <div className="absolute -mt-5 w-full p-5">
        <img className="mt-5 w-12 " src={Cardlogo} alt="logo" />
        <p className="mt-10 text-xl font-[200] tracking-widest  text-white">
          {cardnumber || "0000 0000 0000 0000"}
        </p>
        <div className="mt-5 flex">
          <p className="mr-[7rem] text-xs font-normal text-white">
            {cardname || "Jane Appleseed"}
          </p>
          <p className="justify-self-end text-xs font-normal text-white">
            {mm || "00"}/{yy || "00"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Frontview;
