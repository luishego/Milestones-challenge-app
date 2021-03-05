import { string } from "../../../globals";
import "./AreaButtonComponent.css";
const AreaButtonComponent = ({ activeTab }) => {
  return (
    <section className="bottom-btn-container">
      <button className="bottom-btn">
        {activeTab === string.tabs.physical
          ? string.button.next
          : string.button.finished}
      </button>
    </section>
  );
};

export default AreaButtonComponent;
