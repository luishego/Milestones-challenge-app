import { useState } from "react";
import { string } from "../../globals";
import "./MilestonButtonComponent.css";
const MilestoneButtonComponent = ({ buttonStateProps }) => {
  const [buttonState, setButtonState] = useState({
    ...buttonStateProps,
    style: buttonStateProps.master
      ? string.buttonStyles.completed
      : string.buttonStyles.notAnswered,
    label: buttonStateProps.master
      ? string.button.completed
      : string.button.notAnswered,
    clicked: buttonStateProps.master ? true : false,
  });

  const handleClick = () => {
    buttonState.clicked = !buttonState.clicked;
    buttonState.clicked
      ? setButtonState({
          ...buttonState,
          style: string.buttonStyles.completed,
          label: string.button.completed,
        })
      : setButtonState({
          ...buttonState,
          style: string.buttonStyles.uncompleted,
          label: string.button.uncompleted,
        });
  };
  return (
    <button
      onClick={handleClick}
      className={`check-button ${buttonState.style}`}
    >
      {buttonState.label}
    </button>
  );
};

export default MilestoneButtonComponent;
