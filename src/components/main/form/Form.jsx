import React from "react";
import Submit from "./submitReset/Submit";
import TextField from "./text-field/TextField";

const Form = () => {
  return (
    <div className="formWrapper">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="formFields">
          <TextField
            name={"name"}
            type={"text"}
            onChange={""}
            onBlur={""}
            error={""}
            label={"captain name"}
          />
          <TextField
            name={"boatName"}
            type={"text"}
            onChange={""}
            onBlur={""}
            error={""}
            label={"boat name"}
          />
          <TextField
            name={"name"}
            type={"checkbox"}
            onChange={""}
            onBlur={""}
            error={""}
            label={"boat name"}
          />
          <TextField
            name={"name"}
            type={"checkbox"}
            onChange={""}
            onBlur={""}
            error={""}
            label={"boat name"}
          />
          <TextField
            name={"name"}
            type={"radio"}
            onChange={""}
            onBlur={""}
            error={""}
            label={"boat name"}
          />
          <TextField
            name={"name"}
            type={"radio"}
            onChange={""}
            onBlur={""}
            error={""}
            label={"boat name"}
          />
        </div>
        <Submit />
      </form>
    </div>
  );
};

export default Form;
