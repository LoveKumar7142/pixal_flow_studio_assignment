import "./Css/Silos.css";
import useScrollReveal from "../hooks/useScrollReveal";
import { FaTools, FaWallet, FaCalculator, FaShieldAlt } from "react-icons/fa";

const Silos = () => {
    const [ref, visible] = useScrollReveal();
    return (
        <section ref={ref}
      className={`hybrid fade-section ${visible ? "visible" : ""}`}>
            <div className="silos-content">
                <h2>Break the Silos</h2>

                <p className="intro">Reconsyde unifies:</p>

                <div className="silos-grid">

                    <div className="silo-card">
                        <FaTools className="silo-icon" />
                        <h4>Ops</h4>
                        <span>(exceptions)</span>
                    </div>

                    <div className="silo-card">
                        <FaWallet className="silo-icon" />
                        <h4>Treasury</h4>
                        <span>(liquidity)</span>
                    </div>

                    <div className="silo-card">
                        <FaCalculator className="silo-icon" />
                        <h4>Finance</h4>
                        <span>(adjustments)</span>
                    </div>

                    <div className="silo-card">
                        <FaShieldAlt className="silo-icon" />
                        <h4>Audit</h4>
                        <span>(trail & compliance)</span>
                    </div>
                </div>

                <p className="closing">
                    Everyone works in a single ecosystem.
                </p>
            </div>
        </section>
    );
};

export default Silos;