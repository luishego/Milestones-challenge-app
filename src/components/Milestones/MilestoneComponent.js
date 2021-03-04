import { useEffect, useState } from "react";
import { string } from "../../globals";
import "./MilestoneComponent.css";

const MilestoneComponent = ({ milestone }) => {
  const [buttonState, setButtonState] = useState({
    label: string.button.uncompleted,
    style: "not-answered",
    master: milestone.master,
  });
  useEffect(() => {
    if (!milestone.master) {
      setButtonState({
        label: string.button.uncompleted,
        style: "not-answered",
        master: milestone.master,
      });
    }
  }, [milestone.master]);

  return (
    <>
      <div className="milestone-container">
        <section className="milestone-element">
          <h2 className="milestone-title">{milestone.title}</h2>
          <span className="milestone-subtitle">{milestone.description}</span>
        </section>

        <button className={`check-button ${buttonState.style}`}>
          {buttonState.label}
        </button>
      </div>
    </>
  );
};

export default MilestoneComponent;
