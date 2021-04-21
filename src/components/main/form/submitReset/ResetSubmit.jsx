import React from "react";

const ResetSubmit = ({ onClick, type, name }) => {
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
        type={type}
        onClick={onClick}
      >
        <span>{name}</span>
      </button>
    </div>
  );
};

export default ResetSubmit;
