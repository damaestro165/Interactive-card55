import React from "react";
import Cardback from "../images/bg-card-back.png";

function Backview({ formData }) {
  return (
    <div className="flex justify-end ">
      <img
        className="h-25 relative object-cover md:h-[10rem] xl:h-[12rem]"
        src={Cardback}
        alt="cardback"
      />
      <div className="absolute z-10 mt-[4rem] mr-[3rem]">
        <p className="font-[300] text-white ">{formData.cvc || "000"}</p>
      </div>
    </div>
  );
}

export default Backview;
