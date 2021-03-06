import { useState } from "react";
import "./App.css";
import AreasComponent from "./components/Areas/AreasComponent";
import { SkillsContext } from "./SkillsContext";

function App() {
  const [milestoneArr, setMilestoneArr] = useState([]);
  console.log(milestoneArr);
  return (
    <>
      <SkillsContext.Provider value={{ milestoneArr, setMilestoneArr }}>
        <AreasComponent />
      </SkillsContext.Provider>
    </>
  );
}

export default App;
