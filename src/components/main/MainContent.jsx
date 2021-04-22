import React, { useState } from "react";
import Popup from "../popup/Popup";
import Form from "./form/Form";
import PressButton from "./pressButton/PressButton";
import Title from "./title/Title";

const MainContent = () => {
  const [trigger, setTrigger] = useState(false);

  const onPopUpHandler = () => {
    setTrigger(!trigger);
  };

  return (
    <main className="main">
      <h2>Complete the form to participate in spanish gold fleet raid</h2>

      <Title />
      <PressButton handler={onPopUpHandler} />

      <Popup trigger={trigger} handler={onPopUpHandler}>
        <Form trigger={trigger} triggerHandler={setTrigger}/>
      </Popup>
    </main>
  );
};

export default MainContent;
