import { useState } from "react";
import { string } from "../../globals";
import "./MilestonButtonComponent.css";
const MilestoneButtonComponent = ({ buttonStateProps }) => {
  const [buttonState] = useState(buttonStateProps);
  const [buttonSettings, setButtonSettings] = useState({
    style: buttonState.master
      ? string.buttonStyles.completed
      : string.buttonStyles.notAnswered,
    label: buttonState.master
      ? string.button.completed
      : string.button.notAnswered,
    clicked: buttonState.master ? true : false,
  });
  const handleClick = () => {
    buttonSettings.clicked = !buttonSettings.clicked;
    buttonSettings.clicked
      ? setButtonSettings({
          ...buttonSettings,
          style: string.buttonStyles.completed,
          label: string.button.completed,
        })
      : setButtonSettings({
          ...buttonSettings,
          style: string.buttonStyles.uncompleted,
          label: string.button.uncompleted,
        });
  };
  return (
    <button
      onClick={handleClick}
      className={`check-button ${buttonSettings.style}`}
    >
      {buttonSettings.label}
    </button>
  );
};

export default MilestoneButtonComponent;
