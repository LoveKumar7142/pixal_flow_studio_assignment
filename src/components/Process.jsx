import "./Css/Process.css";
import { FaBolt, FaClipboardList } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const Process = () => {
    const [ref, visible] = useScrollReveal();
  return (
    <section ref={ref}
      className={`hybrid fade-section ${visible ? "visible" : ""}`}>
      <div className="process-content">
        <h2>Your Process. Your Choice.</h2>

        <div className="cards">
          {/* Preset Intelligence */}
          <div className="card">
            <h3><FaBolt /> Preset Intelligence</h3>
            <p>Ready-made workflows for:</p>
            <ul>
              <li>MT940 / MT950 Nostro</li>
              <li>UPI</li>
              <li>IMPS</li>
              <li>Cards</li>
              <li>NACH</li>
              <li>Lending</li>
            </ul>
            <span className="tag">Deploy immediately</span>
          </div>

          {/* Custom Replication */}
          <div className="card">
            <h3><FaClipboardList /> Custom Replication</h3>
            <p>Replicate your exact SOPs:</p>
            <ul>
              <li>Approval layers</li>
              <li>Matching logic</li>
              <li>Exceptions</li>
              <li>Multi-level routing</li>
              <li>Custom ledger adjustments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
