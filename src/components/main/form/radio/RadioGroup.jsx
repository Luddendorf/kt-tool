import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
const RadioGroupField = ({ value, handleChange }) => {
  return (
    <div>
      <FormLabel component="legend" className="radioGroupLegend">
        in full conformity?
      </FormLabel>
      <RadioGroup
        aria-label="in full conformity?"
        name="captainHonor"
        className="justifyRadioBtns"
      >
        <div>
          <FormControlLabel
            className="radioBtn"
            name={"isFullHonor"}
            value="honor"
            // checked={value === "honor"}
            // onChange={handleChange}
            control={<Radio color="primary" />}
            label="full worship"
          />
        </div>
        <div>
          <FormControlLabel
            className="radioBtn"
            name={"isFullHonor"}
            // checked={value === "do not honor"}
            // onChange={handleChange}
            value="do not honor"
            control={<Radio color="primary" />}
            label="partial worship"
          />
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioGroupField;
