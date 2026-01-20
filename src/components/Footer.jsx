import "./Css/Footer.css";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">

            <p><FaRegCopyright /> 2026 Reconsyde. All rights reserved.</p>
            <p className="studio">Built by Pixel Flow Studio</p>
        </footer>
    );
};

export default Footer;
