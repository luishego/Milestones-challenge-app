import "./AreasComponent.css";
import { string } from "../../globals";
import { useEffect, useState } from "react";
import { fetchMilestones } from "../../services/FetchMilestones";
import MilestoneComponent from "../Milestones/MilestoneComponent";
import AreaButtonComponent from "./AreaButtonComponent/AreaButtonComponent";

const AreasComponent = () => {
  const [area, setArea] = useState({
    bgColor: "",
    buttonTag: "",
    isActive: null,
  });
  const [activeTab, setActiveTab] = useState(string.tabs.physical);
  const [skill, setSkill] = useState("");

  useEffect(() => {
    setArea({
      bgColor: string.areaBgColor.physical,
      buttonTag: string.button.next,
      isActive: true,
    });
    fetchMilestones(string.tabs.physical).then(({ skill }) => {
      setSkill(skill);
    });
  }, []);

  const handleClick = (e) => {
    setActiveTab(e.target.id);
    selectAtributesById(e.target.id);
  };
  const selectAtributesById = (eventId) => {
    switch (eventId) {
      case string.tabs.physical:
        setArea({
          bgColor: string.areaBgColor.physical,
          buttonTag: string.button.next,
          isActive: true,
        });
        break;
      case string.tabs.social:
        setArea({
          bgColor: string.areaBgColor.social,
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
  console.log();
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
            <h1 className="skill-title">{`Skill: ${
              skill.title || ""
            }. Age Range: ${skill.age_range || ""}. `}</h1>
            <p>{skill.description}</p>
          </>
        ) : (
          ""
        )}
      </div>
      {skill.milestones?.map((milestone) => {
        return (
          <>
            <MilestoneComponent key={milestone.id} milestone={milestone} />
          </>
        );
      })}
      {area.isActive && (
        <>
          <AreaButtonComponent activeTab={activeTab} />
        </>
      )}
    </>
  );
};

export default AreasComponent;
