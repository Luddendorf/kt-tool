import React from "react";
import { BiUser } from "react-icons/bi";
import { IconContext } from "react-icons";

const PressButton = ({ handler }) => {
  const onMouseEnter = (e) => {
    const { target } = e;
    target.classList.add("stopAnimation");
    console.log(target.classList);
  };

  return (
    <div className="pressBtnWrapper">
      <button
        onClick={handler}
        className="pressBtn"
        onMouseEnter={onMouseEnter}
      >
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
