import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
const RadioGroupField = ({ checked, onHandleRadioChange }) => {

  

  return checked ? (
    <div>
      <FormLabel component="legend" className="radioGroupLegend">
        in full conformity?
      </FormLabel>
      <RadioGroup
        onChange={onHandleRadioChange}
        aria-label="in full conformity?"
        name="isFullHonor"
        className="justifyRadioBtns"
      >
        <div>
          <FormControlLabel
            value="honor"
            className="radioBtn"
            control={<Radio color="primary" />}
            label="full worship"
          />
        </div>
        <div>
          <FormControlLabel
            value="do not honor"
            className="radioBtn"
            control={<Radio color="primary" />}
            label="partial worship"
          />
        </div>
      </RadioGroup>
    </div>
  ) : (
    ""
  );
};

export default RadioGroupField;
