import React from "react";

const Popup = ({ trigger, triggerHandler, children }) => {
  const onPopupClose = (e) => {
    if (e.target.className === "popupContent") triggerHandler(!trigger);
  };

  return trigger ? (
    <div className="popupWrapper" onClick={onPopupClose}>
      <div className="popupContent">{children}</div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
