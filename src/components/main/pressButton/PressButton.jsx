import React from "react";
import { BiUser } from "react-icons/bi";
import { IconContext } from "react-icons";

const PressButton = ({ handler }) => {
  return (
    <div className="pressBtnWrapper">
      <button onClick={handler} className="pressBtn">
        <IconContext.Provider
          value={{
            color: "black",
          }}
        >
          <span>
            <BiUser width={10} size="80" />
          </span>
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default PressButton;
