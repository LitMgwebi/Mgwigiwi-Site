import LinkCard from "../../../components/LinkCard";
import { Link } from "react-router-dom";
import previous from "../../../media/logos/previous.png";
import home from "../../../media/logos/home.png";

function Digital({ handleFlip }) {
    return (
        <div id="Menu">
            <div id="ProjectHeader">
                <div className="button-group">
                    <button className="btn btn-link" onClick={handleFlip}>
                        <img src={previous} className="previousLogo" alt="back" />
                    </button>
                </div>
                <div><h1>Digital Art</h1></div>
                <div>
                    <button className="btn btn-link">
                        <Link to="/">
                            <img src={home} className="homeLogo" alt="home" />
                        </Link>
                    </button>
                </div>
            </div>
            <div className="information">
                <LinkCard
                    routeLink="concept"
                    contentHeader="Concept"
                    imgLink={require("../../../media/concept.png")}
                    tagLine=""
                />
                <LinkCard
                    routeLink="character-design"
                    contentHeader="Character design"
                    imgLink={require("../../../media/character-design.png")}
                    tagLine=""
                />
                <LinkCard
                    routeLink="background"
                    contentHeader="Background"
                    imgLink={require("../../../media/photography-equipment.png")}
                    tagLine=""
                />

            </div>
        </div>
    )
}

export default Digital;