import { GetAll } from "../../../hooks/useGet";
import FineArtCard from "./components/FineArtCard";
import AddFineArt from "./components/AddFineArt";
import { Card } from "@material-ui/core";

function FineArtIndex() {
    const { payloads, isPending, error } = GetAll("fineArt");

    return (
        <div>
            <div>
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
                <h2>Fine Art</h2>
            </div>

            <div>
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