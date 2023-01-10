import { GetAll } from "../../../hooks/useGet";
import FineArtCard from "./components/FineArtCard";
import AddFineArt from "./components/AddFineArt";
import { Card } from "@material-ui/core";
import ProjectHeader from "../../../components/Templates/ProjectHeader";

function FineArtIndex() {
    const { payloads, isPending, error } = GetAll("fineArt");

    return (
        <div>
            <div>
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
                <ProjectHeader header="Fine Art" link="/portfolio"/>
            </div>

            <div className="ContentContainer">
                <Card className="card">
                    <AddFineArt />
                </Card>
                {payloads && payloads.map((payload, i) => {
                    return (
                        <FineArtCard payload={payload} />
                    );
                })}
            </div>
        </div>
    )
}

export default FineArtIndex;