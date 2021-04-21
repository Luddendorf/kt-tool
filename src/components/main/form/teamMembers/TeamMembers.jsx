import React from "react";
import TextField from "../textField/TextField";

const TeamMembers = ({
  goldenFleetRaiderForm,
  onHandleSubmit,
  onHandleAddDeleteMember,
}) => {
  return (
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
  );
};

export default TeamMembers;
