import { useEffect, useState } from "react";
import { string } from "../../globals";
import "./MilestoneComponent.css";

const MilestoneComponent = ({ milestone }) => {
  console.log(milestone);
  let [buttonState, setButtonState] = useState({
    label: "",
    style: "",
    master: "",
    clicked: null,
  });
  useEffect(() => {
    setButtonState(() =>
      !milestone.master
        ? {
            label: string.button.notAnswered,
            style: string.buttonStyles.notAnswered,
            master: milestone.master,
            clicked: null,
          }
        : {
            label: string.button.completed,
            style: string.buttonStyles.completed,
            master: true,
            clicked: false,
          }
    );
  }, [milestone.master]);

  const handleClick = () => {
    setButtonState(() =>
      !buttonState.clicked
        ? {
            label: string.button.uncompleted,
            clicked: true,
            style: string.buttonStyles.uncompleted,
            master: false,
          }
        : {
            label: string.button.completed,
            clicked: false,
            style: string.buttonStyles.completed,
            master: true,
          }
    );
  };

  return (
    <>
      <div className="milestone-container">
        <section className="milestone-element">
          <h2 className="milestone-title">
            {milestone.title} {`Age: ${milestone.age}`}
          </h2>
          <span className="milestone-subtitle">{milestone.description}</span>
        </section>

        <button
          onClick={handleClick}
          className={`check-button ${buttonState.style}`}
        >
          {buttonState.label}
        </button>
      </div>
    </>
  );
};

export default MilestoneComponent;
