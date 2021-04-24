import React, { useState } from "react";
import Popup from "../popup/Popup";
import Form from "./form/Form";
import PressButton from "./pressButton/PressButton";
import Title from "./title/Title";

const MainContent = () => {
  const [trigger, setTrigger] = useState(false);
  const [formData, setFormData] = useState({});

  const onPopUpHandler = () => {
    setTrigger(!trigger);
  };

  console.log("MAIN");

  return (
    <main className="main">
      <h2>Complete the form to participate in spanish gold fleet raid</h2>

      <Title />
      <PressButton handler={onPopUpHandler} />

      <Popup trigger={trigger} triggerHandler={setTrigger}>
        <Form
          trigger={trigger}
          triggerHandler={setTrigger}
          handler={onPopUpHandler}
          setFormData={setFormData}
        />
      </Popup>
      <div className="output">
        {formData[0] && (
          <div className="div">
            <div>capitans name: {formData.capName}</div>
            <div>ship name: {formData.shipName}</div>
            <div>
              Does the captain respects the code of honor: {formData.honor}
            </div>
            <div>in full conformity?: {formData.isFullHonor}</div>
            {Array.from(formData).forEach((item, id) => {
              if (typeof item[id] === "object") {
                return <div key={id}>mariner: {item[0]}</div>;
              }
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;
