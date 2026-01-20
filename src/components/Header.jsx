import { Link } from "react-router-dom";
import { FaCogs, FaProjectDiagram, FaUsers } from "react-icons/fa";
import "./Css/Header.css";
import { showDemoAlert } from "../utils/actions";

const Header = () => {
    return (
        <header className="header">
            <div className="header-inner">

                <div className="logo">
                    <img src="/bancapp.svg" alt="Reconsyde Logo" />
                </div>

                <nav className="nav">
                    <Link to="/"><FaCogs /> Platform</Link>
                    <Link to="/advantage"><FaProjectDiagram /> Advantage</Link>
                    <Link to="/process"><FaCogs /> Process</Link>
                    <Link to="/teams"><FaUsers /> Teams</Link>
                </nav>

                <button className="header-btn" onClick={showDemoAlert}>
                    Request Demo
                </button>
            </div>
        </header>
    );
};

export default Header;
