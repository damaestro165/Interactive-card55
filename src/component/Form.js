import React, { useState, useEffect } from "react";
import Completeicon from "../images/complete.svg";

function Form({ handleData }) {
  const initialValues = {
    cardname: "",
    cardnumber: "",
    mm: "",
    yy: "",
    cvc: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [hidden, setHidden] = useState("");
  const [block, setBlock] = useState("hidden");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    setisSubmit(true);
    handleData(formValues);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handleData(formValues);
      setHidden("hidden");
      setBlock("flex");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const letter = /^[a-zA-Z ]*$/;
    const number = /^[0-9 ]*$/;
    const sixteen = /\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/;
    const two = /^[0-9]{2}$/;
    const three = /^[0-9]{3}$/;

    if (!values.cardname) {
      errors.cardname = "Can't be blank";
    } else if (!letter.test(values.cardname)) {
      errors.cardname = "Wrong format, alphabet only.";
    }

    if (!values.cardnumber) {
      errors.cardnumber = "Can't be blank";
    } else if (!number.test(values.cardnumber)) {
      errors.cardnumber = "Wrong format, number only.";
    } else if (!sixteen.test(values.cardnumber)) {
      errors.cardnumber =
        "must be 16, and add space between the each foru digit.";
    }

    if (!values.cvc) {
      errors.cvc = "Can't be blank";
    } else if (!number.test(values.cvc)) {
      errors.cvc = "Wrong format, number only.";
    } else if (!three.test(values.cvc)) {
      errors.cvc = "Wrong format,  must be three digit.";
    }

    if (!values.yy) {
      errors.yy = "Can't be blank";
    } else if (!number.test(values.yy)) {
      errors.yy = "Wrong format,  year in number.";
    } else if (!two.test(values.yy)) {
      errors.yy = "Wrong format,  must be two digit.";
    }

    if (!values.mm) {
      errors.mm = "Can't be blank";
    } else if (!number.test(values.mm)) {
      errors.mm = "Wrong format, month in number.";
    } else if (!two.test(values.mm)) {
      errors.mm = "Wrong format,  must be two digit.";
    }
    return errors;
  };

  return (
    <div className="mt-[3rem] md:container md:mx-auto md:mt-[4rem] md:w-[22.5rem]">
      <div
        className={`${block}  flex-col items-center justify-center pt-[5rem]`}
      >
        <img src={Completeicon} alt="icon" />
        <p className="my-5 text-xl font-medium text-mama">THANK YOU</p>
        <p className="mb-5 text-sm text-slate-500 ">
          We've added your card detail
        </p>
        <button className="mt-5 block w-full rounded-lg border bg-mama p-3 text-xl font-medium text-white">
          Continue
        </button>
      </div>
      <form className={`${hidden}`} onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="cardname"
            className="mb-5 block text-xs font-medium text-gray-900"
          >
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            name="cardname"
            className="mb-5  block w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 "
            placeholder="e.g. JANE APPLESEED"
            value={formValues.cardname}
            onChange={handleChange}
          />
          <p className="-mt-2 text-xs font-light text-red-600">
            {formErrors.cardname}
          </p>
        </div>
        <div>
          <label
            className="mb-5 block text-xs  font-medium text-gray-900"
            htmlFor="cardnumber"
          >
            CARD NUMBER
          </label>
          <input
            type="text"
            name="cardnumber"
            className="mb-5 block w-full  rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 "
            placeholder="e.g. 1234 5678 9123 0000"
            value={formValues.cardnumber}
            onChange={handleChange}
          />
          <p className="-mt-2 text-xs font-light text-red-600">
            {formErrors.cardnumber}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <label
              htmlFor="mm"
              className="mb-5 ml-1 block text-xs font-medium text-gray-900 "
            >
              EXP. DATE(MM/YY)
            </label>
            <div className="flex ">
              <input
                name="mm"
                className="mr-2 block  w-[3.5rem] rounded-lg  border border-gray-300 bg-white p-3 text-sm text-gray-900  md:w-[4.5rem]"
                type="text"
                placeholder="MM"
                value={formValues.mm}
                onChange={handleChange}
              />

              <input
                name="yy"
                className="block w-[3.5rem] rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900  md:w-[4.5rem]"
                type="text"
                placeholder="YY"
                value={formValues.yy}
                onChange={handleChange}
              />
            </div>
            <p className="-mt-2 text-xs font-light text-red-600">
              {formErrors.mm} {formErrors.yy}
            </p>
          </div>

          <div>
            <label
              htmlFor="cvc"
              className="mb-5 block text-xs font-medium  text-gray-900"
            >
              CVC
            </label>
            <input
              name="cvc"
              type="number"
              className="block rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900"
              placeholder="e.g. 123"
              value={formValues.cvv}
              onChange={handleChange}
            />

            <p className=" mb-2 text-xs font-light text-red-600">
              {formErrors.cvc}
            </p>
          </div>
        </div>
        <button
          className="mt-5 block w-full rounded-lg border bg-mama p-3 text-xl font-semibold text-white"
          onSubmit={handleSubmit}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Form;
