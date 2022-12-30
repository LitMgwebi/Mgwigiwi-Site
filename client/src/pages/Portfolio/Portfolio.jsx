import FlipCard from "../Layout/ProgramTemplate/Card/CollapseSiteCard";
import LinkCard from "../Layout/ProgramTemplate/Card/LinkSiteCard";
import {useState} from "react"
import ReactCardFlip from "react-card-flip";
import ProjectHeader from "../../components/Templates/ProjectHeader";

function Portfolio() {
    const [flip, setFlip] = useState(false);
    const [page, setPage] = useState("")

    const choosePage = (page) => setPage(page)
    const handleClick = () => setFlip(!flip);
    return(
        <div className="portfolio">
            <ProjectHeader header="Portfolio" link="/"/>
            <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                <div className="ContentContainer">
                    <CollapseSiteCard
                        handleClick={handleClick}
                        choosePage={choosePage}
                        contentHeader="Digital"
                        imgLink={require("../../media/ForCards/Digital/digital-drawing.png")}
                        tagLine=""
                        page="Digital"
                    />
                    <CollapseSiteCard 
                        handleClick={handleClick}
                        choosePage={choosePage}
                        contentHeader="Fine"
                        imgLink={require("../../media/ForCards/Digital/digital-drawing.png")}
                        tagLine=""
                        page="Physical"
                    />
                    <LinkSiteCard
                        routeLink="animation"
                        contentHeader="Animation"
                        imgLink={require("../../media/ForCards/Digital/digital-drawing.png")}
                        tagLine=""
                    />
                </div>
                <div className="flipContent">
                    {page === "Digital" ? <Digital handleClick={handleClick}/> : page === "Physical"? <Physical handleClick={handleClick}/> : <div>404</div>}
                    
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default Portfolio;