import "./AreasComponent.css";
import { string } from "../../globals";
import { areaConfig } from "./fixture";
import { useEffect, useState } from "react";
import { fetchMilestones } from "../../services/FetchMilestones";
import MilestoneComponent from "../Milestones/MilestoneComponent";
import AreaButtonComponent from "./AreaButtonComponent/AreaButtonComponent";

const AreasComponent = () => {
  const [area] = useState(areaConfig.physical);
  const [activeTab, setActiveTab] = useState(string.tabs.physical.value);
  const [skill, setSkill] = useState("");

  useEffect(() => {
    fetchMilestones(string.tabs.physical.value).then(({ skill }) => {
      setSkill(skill);
    });
  }, []);

  const handleClick = (e) => {
    setActiveTab(e.target.id);
    fetchMilestones(activeTab).then(({ skill }) => {
      setSkill(skill);
    });
  };
  return (
    <>
      <div className={`area-container ${activeTab}`}>
        <h2 className="main-title">{string.title}</h2>
        <section className="tab-container">
          <button
            className={`tab-button physical-button `}
            id={string.tabs.physical.value}
            onClick={handleClick}
            type="button"
          >
            {string.tabs.physical.label}
          </button>
          <button
            className={`tab-button  social-button`}
            id={string.tabs.social.value}
            onClick={handleClick}
            type="button"
          >
            {string.tabs.social.label}
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
      {area && (
        <>
          <AreaButtonComponent activeTab={activeTab} />
        </>
      )}
    </>
  );
};

export default AreasComponent;
