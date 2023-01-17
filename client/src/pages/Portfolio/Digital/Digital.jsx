import LinkCard from "../../../components/LinkCard";

function Digital({ handleFlip }) {
    return (
        <div id="Menu">
            <div id="ProjectHeader">
            <button className="flipButton" onClick={handleFlip}>
                Back
            </button>
            <h1>Digital Art</h1>
            </div>
            <div className="cardContainer">
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