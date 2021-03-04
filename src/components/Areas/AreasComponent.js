import "./AreasComponent.css";
import { string } from "../../globals";
import { useEffect, useState } from "react";
import { fetchMilestones } from "../../services/FetchMilestones";
import MilestoneComponent from "../Milestones/MilestoneComponent";

const AreasComponent = () => {
  const [area, setArea] = useState({
    bgColor: "",
    buttonTag: "",
    isActive: null,
  });
  const [skill, setSkill] = useState({});

  useEffect(() => {
    setArea({
      bgColor: "physical",
      buttonTag: string.button.next,
      isActive: true,
    });
    fetchMilestones(string.tabs.physical).then(({ skill }) => {
      setSkill(skill);
    });
  }, []);

  const handleClick = (e) => {
    selectAtributesById(e.target.id);
  };
  const selectAtributesById = (eventId) => {
    switch (eventId) {
      case string.tabs.physical:
        setArea({
          bgColor: "physical",
          buttonTag: string.button.next,
          isActive: true,
        });
        break;
      case string.tabs.social:
        setArea({
          bgColor: "social",
          buttonTag: string.button.finished,
          isActive: true,
        });
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
      <div className={`area-container ${area.bgColor}`}>
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
      {skill.milestones?.map((milestone) => (
        <>
          <MilestoneComponent key={milestone.id} milestone={milestone} />
        </>
      ))}
      {area.isActive && (
        <section className="botomm-btn-container">
          <button className="botomm-btn">{area.buttonTag}</button>
        </section>
      )}
    </>
  );
};

export default AreasComponent;
