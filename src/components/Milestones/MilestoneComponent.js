import { string } from "../../globals";
import "./MilestoneComponent.css";

const MilestoneComponent = ({ milestone }) => {
  return (
    <div className="milestone-container">
      <section className="milestone-element">
        <h2 className="milestone-title">{milestone.title}</h2>
        <span className="milestone-subtitle">{milestone.description}</span>
      </section>

      <button className="check-button"> {string.button.completed} </button>
    </div>
  );
};

export default MilestoneComponent;
