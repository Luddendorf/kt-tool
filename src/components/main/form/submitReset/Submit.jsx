import React from "react";

const Submit = ({ onSubmitClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        type="submit"
        style={{
          padding: ".8rem",
          fontSize: "1.5rem",
          borderRadius: ".6rem",
        }}
        onClick={onSubmitClick}
      >
        submit
      </button>
    </div>
  );
};

export default Submit;
