import React, { useState } from "react";
import "./App.css";
import Mbg from "./images/bg-main-mobile.png";
import Wbg from "./images/bg-main-desktop.png";
import Backview from "./component/Backview";
import Frontview from "./component/Frontview";
import Form from "./component/Form";

function App() {
  const [data, setData] = useState([]);
  const handleData = (example) => {
    setData(example);
  };
  return (
    <main className=" h-screen w-screen">
      <div className=" relative flex h-screen w-screen flex-col md:flex-row xl:md:flex-row">
        <div className=" absolute   z-50 hidden p-5 drop-shadow-2xl md:ml-[5rem] md:mt-[5rem] md:block xl:ml-[2.5rem] xl:mt-[3rem] ">
          <Frontview formData={data} />
        </div>
        <div className=" z-49  absolute mb-10 hidden p-5 drop-shadow-2xl md:ml-[8.5rem] md:mt-[15.5rem] md:block md:p-10 xl:left-40 xl:mt-[15rem] xl:ml-[10px]">
          <Backview formData={data} />
        </div>
        <div className="sm:w-2/5 md:w-2/6">
          <div className="relative h-full md:hidden">
            <img className="w-full object-cover " src={Mbg} alt="mobilebg" />
            <div className="drop-shadow-2xlml-5 absolute top-0 left-0  -mt-3 p-10">
              <Backview formData={data} />
            </div>
            <div className="h- absolute -bottom-12 -left-6 mr-6 -mb-8 p-10 drop-shadow-2xl ">
              <Frontview formData={data} />
            </div>
          </div>
          <div className="relative -z-10 hidden h-screen md:flex">
            <img className="object-cover" src={Wbg} alt="Desktopbg" />
          </div>
        </div>

        <div className="w-full p-5  md:w-4/6 xl:mt-20 xl:py-10">
          <Form handleData={handleData} />
        </div>
      </div>
    </main>
  );
}

export default App;
