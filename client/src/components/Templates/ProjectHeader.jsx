import {Link} from "react-router-dom"

function ProjectHeader({header, link}){
    return(
        <div className="ProjectHeader">
            {link !== "home" ?  
                <Link to={link}>
                    Back
                </Link>
            : <div></div>}
            <h1>{header}</h1>
        </div>
    );
}

export default ProjectHeader;