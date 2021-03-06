import { string } from "../../../globals";
import "./AreaButtonComponent.css";
const AreaButtonComponent = ({ activeTab }) => {
  return (
    <section className="bottom-btn-container">
      <button id={activeTab} className="bottom-btn">
        {activeTab === string.tabs.physical.value
          ? string.button.next
          : string.button.finished}
      </button>
    </section>
  );
};

export default AreaButtonComponent;
