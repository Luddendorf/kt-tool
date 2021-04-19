import React from "react";

const Reset = ({ onResetClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          padding: ".8rem",
          fontSize: "1.5rem",
          borderRadius: ".6rem",
        }}
        type="reset"
        onClick={onResetClick}
      >
        reset
      </button>
    </div>
  );
};

export default Reset;
