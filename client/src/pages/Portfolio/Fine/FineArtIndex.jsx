import { GetAll } from "../../../hooks/useGet";
import FineArtCard from "./components/FineArtCard";
import AddFineArt from "./components/AddFineArt";
import { Card } from "@material-ui/core";
import ProjectHeader from "../../../components/ProjectHeader";

function OutputPayload({ payloads }) {
    const { landscape, portrait, other } = payloads
    console.log(landscape)
    console.log(portrait)
    console.log(other)
    return (
        <div>
            <div className="information">
                {landscape ? <div>Whole lotta nothing</div> : landscape.map((landscape) => {
                    return (
                        <FineArtCard payload={landscape} />
                    );
                })}
            </div>

            <div className="information">
                {portrait && portrait.map((portrait) => {
                    return (
                        <FineArtCard payload={portrait} />
                    )
                })}
            </div>


            <div className="information">
                {other != null ? <div>Whole lotta nothing</div> : other.map((other) => {
                    return (
                        <FineArtCard payload={other} />
                    )
                })}
            </div>
        </div>
    );
}
function FineArtIndex() {
    const { payloads, isPending, error } = GetAll("fineArt");

    return (
        <div id="Index">
            <div>
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
                <ProjectHeader header="Fine Art" link="/portfolio" />
            </div>

            <Card className="createCard">
                <AddFineArt />
            </Card>

            {payloads === null ? <div className="information">Whole lot of nothing</div>
                : <OutputPayload payloads={payloads} />}
        </div>
    )
}

export default FineArtIndex;