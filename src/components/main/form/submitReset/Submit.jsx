import React from "react";

const onHandleClick = (e) => {
  e.preventDefault();
  alert("Ervin");
};

const Submit = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          padding: "1rem",
          fontSize: "2rem",
          borderRadius: "1rem",
        }}
        type="submit"
        onClick={onHandleClick}
      >
        Submit
      </button>
    </div>
  );
};

export default Submit;
