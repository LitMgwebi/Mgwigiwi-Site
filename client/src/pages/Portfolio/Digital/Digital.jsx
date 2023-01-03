import LinkCard from "../../../components/Templates/LinkCard";

function Digital({ handleFlip }) {
    return (
        <div>

            <button className="flipButton" onClick={handleFlip}>
                Back
            </button>
            <h1>Digital Art</h1>
            <div className="ContentContainer">
                <LinkCard
                    routeLink="concept"
                    contentHeader="Concept"
                    imgLink={require("../../../media/digital-drawing.png")}
                    tagLine=""
                />
                <LinkCard
                    routeLink="character-design"
                    contentHeader="Character design"
                    imgLink={require("../../../media/digital-drawing.png")}
                    tagLine=""
                />
                <LinkCard
                    routeLink="background"
                    contentHeader="Background"
                    imgLink={require("../../../media/digital-drawing.png")}
                    tagLine=""
                />

            </div>
        </div>
    )
}

export default Digital;