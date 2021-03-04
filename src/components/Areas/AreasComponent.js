import "./AreasComponent.css";
import { string } from "../../globals";
import { useEffect, useState } from "react";
import { fetchMilestones } from "../../services/FetchMilestones";
import MilestoneComponent from "../Milestones/MilestoneComponent";

const AreasComponent = () => {
  const [skill, setSkill] = useState({});
  const [buttonTag, setButtonTag] = useState("");

  useEffect(() => {
    fetchMilestones(string.tabs.physical).then(({ skill }) => {
      setSkill(skill);
    });
  }, []);

  const handleClick = (e) => {
    selectAtributesById(e.target.id);
  };
  const selectAtributesById = (eventId) => {
    console.log(eventId);
    const backgroundAttributes = document.querySelector(".area-container");
    switch (eventId) {
      case string.tabs.physical:
        setButtonTag(string.button.next);
        backgroundAttributes.style.backgroundColor = "#1FADDF";
        break;
      case string.tabs.social:
        setButtonTag(string.button.finished);
        backgroundAttributes.style.backgroundColor = "#D43571";
        break;
      default:
        return;
    }

    fetchMilestones(eventId).then(({ skill }) => {
      setSkill(skill);
    });
  };
  return (
    <>
      <div className="area-container">
        <h2 className="main-title">{string.title}</h2>
        <section className="tab-container">
          <button
            className="tab-button physical-button"
            id={string.tabs.physical}
            onClick={handleClick}
            type="button"
          >
            {string.tabs.physical}
          </button>
          <button
            className="tab-button  social-button"
            id={string.tabs.social}
            onClick={handleClick}
            type="button"
          >
            {string.tabs.social}
          </button>
        </section>
        {skill ? (
          <>
            <hr />
            <h1 className="skill-title">{`Skill: ${skill.title || ""} `}</h1>
            <p>{skill.description}</p>
          </>
        ) : (
          ""
        )}
      </div>
      {skill.milestones?.map((milestone, idx) => (
        <>
          <MilestoneComponent key={idx} milestone={milestone} />
        </>
      ))}
      {buttonTag && (
        <section className="botomm-btn-container">
          <button className="botomm-btn">{buttonTag}</button>
        </section>
      )}
    </>
  );
};

export default AreasComponent;
