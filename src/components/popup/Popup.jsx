import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Popup = ({ trigger, handler, children }) => {
  return trigger ? (
    <div className="popupWrapper">
      <div className="popupContent">
        <button className="popupCloseBtn" onClick={handler}>
          <IconContext.Provider
            value={{
              color: "white",
            }}
          >
            <RiCloseFill size="40" style={{ background: "none" }} />
          </IconContext.Provider>
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
