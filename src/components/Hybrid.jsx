import "./Css/Hybrid.css";
import { FaExchangeAlt, FaBrain, FaRocket } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const Hybrid = () => {
    const [ref, visible] = useScrollReveal();
    return (
        <section ref={ref}
            className={`hybrid fade-section ${visible ? "visible" : ""}`}>
            <div className="hybrid-content">
                <h2>Hybrid Advantage — <span>“Stop Buying Empty Boxes.”</span></h2>

                <p>
                    Most SaaS tools give you a dashboard and expect you to build your rules.
                    <br />
                    <strong>Reconsyde reverses this.</strong>
                </p>

                <div className="flow">
                    <span><FaExchangeAlt /> Process Mapping</span>
                    <span>→</span>
                    <span><FaBrain /> Logic Core</span>
                    <span>→</span>
                    <span><FaRocket /> Go Live Faster</span>
                </div>
            </div>
        </section>
    );
};

export default Hybrid;
