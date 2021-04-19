import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const CheckboxFiled = ({ name, checked, onHandleCheckbox }) => {
  return (
    <div>
      <Checkbox
        onClick={onHandleCheckbox}
        checked={checked}
        color="primary"
        name={name}
      />
    </div>
  );
};

export default CheckboxFiled;
