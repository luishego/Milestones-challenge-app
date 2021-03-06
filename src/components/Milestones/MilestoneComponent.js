import { useState } from "react";
import "./MilestoneComponent.css";
import MilestoneButtonComponent from "./MilestonButtonComponent/MilestonButtonComponent";

const MilestoneComponent = ({ milestone }) => {
  const [buttonState] = useState({
    id: milestone.id,
    master: milestone.master,
  });

  return (
    <>
      <div className="milestone-container">
        <section className="milestone-element">
          <h2 className="milestone-title">
            {milestone.title} {`Age: ${milestone.age}`}
          </h2>
          <span className="milestone-subtitle">{milestone.description}</span>
        </section>
        <MilestoneButtonComponent buttonStateProps={buttonState} />
      </div>
    </>
  );
};

export default MilestoneComponent;
