import { Link } from "react-router-dom"

function ProjectHeader({ header, link }) {
    return (
        <div id="ProjectHeader">
            {link !== "home" ?
                <Link to={link}>
                    Back
                </Link>
                : <div></div>}
            <div>
                <h1>{header}</h1>
            </div>
        </div>
    );
}

export default ProjectHeader;