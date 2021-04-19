import React, { useState, useEffect } from "react";
import CheckboxFiled from "./checkbox/CheckboxFiled";
import RadioGroupField from "./radio/RadioGroup";
import TextField from "./textField/TextField";
import Submit from "./submitReset/Submit";
import Reset from "./submitReset/Reset";

const Form = () => {
  const [goldenFleetRaiderForm, setGoldenFleetRaiderForm] = useState({
    capName: "",
    shipName: "",
    honor: false,
    isFullHonor: "",
    marinerName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(goldenFleetRaiderForm);
  };

  const onHandleSubmit = (e) => {
    const { name, value } = e.target;
    setGoldenFleetRaiderForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onHandleCheckbox = (e) => {
    const { name, checked } = e.target;
    setGoldenFleetRaiderForm((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const onHandleReset = (e) => {
    setGoldenFleetRaiderForm({
      capName: "",
      shipName: "",
      honor: false,
      isFullHonor: "",
      marinerName: "",
    });
  };

  const onHandleAddDeleteMember = (e) => {
    e.preventDefault();
    const { name } = e.target;
    if (name === "btnPlus") {
      console.log("plus btn");
    }
    if (name === "btnMinus") {
      console.log("minus btn");
    }
  };

  const onHandleRadioChange = (e) => {
    const { value } = e.target;
    setGoldenFleetRaiderForm((prevState) => ({
      ...prevState,
      isFullHonor: value,
    }));
  };

  return (
    <div className="formWrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="formFields">
          <TextField
            value={goldenFleetRaiderForm.capName}
            name={"capName"}
            type={"text"}
            onChange={onHandleSubmit}
            // onBlur={""}
            label={"captain name"}
            placeholder={"...name"}
          />
          <TextField
            value={goldenFleetRaiderForm.shipName}
            name={"shipName"}
            type={"text"}
            onChange={onHandleSubmit}
            // onBlur={""}
            label={"boat name"}
            placeholder={"...boat name"}
          />

          <label htmlFor="captainHonor" className="hoborLabel">
            <span>Does the captain respects the code of honor</span>
            <CheckboxFiled
              name={"honor"}
              checked={goldenFleetRaiderForm.honor}
              onHandleCheckbox={onHandleCheckbox}
            />
          </label>
          {goldenFleetRaiderForm.honor && (
            <RadioGroupField
              value={goldenFleetRaiderForm.value}
              onHandleChange={onHandleRadioChange}
            />
          )}

          <div className="teamMembers">
            <span>Team members:</span>
            <div>
              <TextField
                value={goldenFleetRaiderForm.marinerName}
                className="marinerName"
                name={"marinerName"}
                type={"text"}
                onChange={onHandleSubmit}
                // onBlur={""}
                placeholder={"mariner's name"}
              />
              <div className="teamMembersBtns">
                <button
                  className="btnPlus"
                  onClick={onHandleAddDeleteMember}
                  name={"btnPlus"}
                >
                  +
                </button>
                <button
                  className="btnMinus"
                  onClick={onHandleAddDeleteMember}
                  name={"btnMinus"}
                >
                  -
                </button>
              </div>
            </div>
          </div>

          <div className="submitResetBlock">
            <Submit onSubmitClick={onHandleSubmit} />
            <Reset onResetClick={onHandleReset} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
