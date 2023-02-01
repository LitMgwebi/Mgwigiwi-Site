import { Link } from "react-router-dom";
import previous from "../media/logos/previous.png";
import home from "../media/logos/home.png"

function ProjectHeader({ header, link }) {
    return (
        <div id="ProjectHeader">
            <div>
                {link !== "home" ?
                    <Link
                        to={link}
                    >
                        <img src={previous} className="headerLogo" alt="theme" />
                    </Link>
                    : <div></div>}
            </div>
            <div>
                <h1>{header}</h1>
            </div>
            <div>
                {link !== "home" ?

                    <Link to="/">
                        <img src={home} className="headerLogo" alt="theme" />
                    </Link>
                    : <div></div>}
            </div>

        </div>
    );
}

export default ProjectHeader;