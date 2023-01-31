import { GetAll } from "../../../hooks/useGet";
import AddFineArt from "./components/AddFineArt";
import { Card } from "@material-ui/core";
import ProjectHeader from "../../../components/ProjectHeader";
import OutputFineArt from "./components/OutputFineArt";
import { useAuthContext } from "../../../hooks/useAuthContext";

function FineArtIndex() {
    const { payloads, isPending, error } = GetAll("fineArt");
    const { user } = useAuthContext();

    return (
        <div id="Index">
            <div>
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
                <ProjectHeader header="Fine Art" link="/portfolio" />
            </div>

            {payloads === null ? <div className="information">Whole lot of nothing</div>
                : <OutputFineArt payloads={payloads} />}

            {user && (
                <Card className="createCard">
                    <AddFineArt />
                </Card>
            )}
        </div>
    )
}

export default FineArtIndex;