import React, { useState, useEffect, useDebugValue } from "react";
import CheckboxFiled from "./checkbox/CheckboxFiled";
import RadioGroupField from "./radio/RadioGroup";
import TextField from "./textField/TextField";
import ResetSubmit from "./submitReset/ResetSubmit";
import TeamMembers from "./teamMembers/TeamMembers";

const Form = ({ trigger, triggerHandler }) => {
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
    clearForm();
    setTimeout(() => triggerHandler(!trigger), 1500);
  };

  const onHandleInputSubmit = (e) => {
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
    console.log(e.currentTarget);
  };

  function clearForm() {
    setGoldenFleetRaiderForm({
      capName: "",
      shipName: "",
      honor: false,
      isFullHonor: "",
      marinerName: "",
    });
  }

  const onHandleReset = () => clearForm();

  const onHandleAddDeleteMember = (e) => {
    e.preventDefault();

    const { name } = e.target;
    if (name === "btnPlus") {
      console.log("btn plus");
    }
    if (name === "btnMinus") {
      console.log("minus btn");
    }
  };

  const onHandleRadioChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setGoldenFleetRaiderForm((prevState) => ({
      ...prevState,
      isFullHonor: value,
    }));
  };

  return trigger ? (
    <div className="formWrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="formFields">
          <TextField
            value={goldenFleetRaiderForm.capName}
            name={"capName"}
            type={"text"}
            onChange={onHandleInputSubmit}
            // onBlur={""}
            label={"captain name"}
            placeholder={"...name"}
          />
          <TextField
            value={goldenFleetRaiderForm.shipName}
            name={"shipName"}
            type={"text"}
            onChange={onHandleInputSubmit}
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
          {/* Radio button group dependency */}

          <RadioGroupField
            checked={goldenFleetRaiderForm.honor}
            onHandleRadioChange={onHandleRadioChange}
          />

          <TeamMembers
            goldenFleetRaiderForm={goldenFleetRaiderForm}
            onHandleInputSubmit={onHandleInputSubmit}
            onHandleAddDeleteMember={onHandleAddDeleteMember}
          />

          <div className="submitResetBlock">
            <ResetSubmit
              onClick={onHandleInputSubmit}
              type={"submit"}
              name={"submit"}
            />
            <ResetSubmit
              onClick={onHandleReset}
              type={"reset"}
              name={"reset"}
            />
          </div>
        </div>
      </form>
    </div>
  ) : (
    ""
  );
};

export default Form;
