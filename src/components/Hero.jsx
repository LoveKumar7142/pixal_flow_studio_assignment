import { showDemoAlert, showExploreAlert } from "../utils/actions";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Css/Hero.css";

const Hero = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`hero fade-section ${visible ? "visible" : ""}`}
    >
      <div className="hero-content">
        <span className="hero-badge">BFSI Data Process Automation</span>

        <h1>
          Reimagine Business.<br />
          <span>Consulting Intelligence.</span><br />
          Algorithmic Precision.
        </h1>

        <p>
          Reconsyde is the only Data Process Automation (DPA) platform engineered
          specifically for the BFSI ecosystem, combining deterministic logic with
          intelligent automation.
        </p>

        <div className="hero-actions">
          <button className="primary-btn" onClick={showDemoAlert}>
            Request Demo
          </button>

          <button className="secondary-btn" onClick={showExploreAlert}>
            Explore Platform
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
