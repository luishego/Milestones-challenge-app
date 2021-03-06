import { useContext, useState } from "react";
import { SkillsContext } from "../../../SkillsContext";
import { buttonStyle } from "./fixture";
import "./MilestonButtonComponent.css";
const MilestoneButtonComponent = ({ buttonStateProps }) => {
  const { setMilestoneArr } = useContext(SkillsContext);
  const [buttonState, setButtonState] = useState({
    ...buttonStateProps,
    ...buttonStyle[buttonStateProps.master ? "completed" : "notAnswered"],
  });

  const handleClick = () => {
    buttonState.clicked = !buttonState.clicked;

    buttonState.clicked
      ? setButtonState({
          ...buttonState,
          ...buttonStyle.completed,
        })
      : setButtonState({
          ...buttonState,
          ...buttonStyle.uncompleted,
        });
    setMilestoneArr({
      ...buttonState,
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
