import LinkCard from "../../../components/LinkCard";
import { Link } from "react-router-dom";

function Digital({ handleFlip }) {
    return (
        <div id="Menu">
            <div id="ProjectHeader">
                <div className="button-group">
                    <button className="btn btn-link" onClick={handleFlip}>
                        Back
                    </button>
                </div>
                <div><h1>Digital Art</h1></div>
                <div>
                    <Link to="/">
                        Home</Link>
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