import { GetAll } from "../../../hooks/useGet";
import FineArtCard from "./components/FineArtCard";
import AddFineArt from "./components/AddFineArt";
import { Card } from "@material-ui/core";
import ProjectHeader from "../../../components/ProjectHeader";

function OutputPayload({ payloads }) {
    const { landscape, portrait, other } = payloads
    return (
        <div className="outputPayload">
            <div className="information">
                {Object.keys(landscape).length > 0 ? landscape.map((landscape) => {
                    return (
                        <FineArtCard payload={landscape} />
                    );
                }) : <div>Whole lotta nothing</div>}
            </div>

            <div className="information">
                {Object.keys(portrait).length && portrait.map((portrait) => {
                    return (
                        <FineArtCard payload={portrait} />
                    )
                })}
            </div>


            <div className="information">
                {Object.keys(other).length > 0 ? other.map((other) => {
                    return (
                        <FineArtCard payload={other} />
                    )
                }) : <div>Whole lotta nothing</div>}
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

            {payloads === null ? <div className="information">Whole lot of nothing</div>
                : <OutputPayload payloads={payloads} />}

            <Card className="createCard">
                <AddFineArt />
            </Card>
        </div>
    )
}

export default FineArtIndex;