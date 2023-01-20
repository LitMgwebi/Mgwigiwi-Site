import { GetAll } from "../../../../hooks/useGet";
import { Card } from "@material-ui/core";
import BackgroundCard from "./components/BackgroundCard";
import AddBackground from "./components/AddBackground";
import ProjectHeader from "../../../../components/ProjectHeader";

function BackgroundIndex() {
    const { payloads, isPending, error } = GetAll("background");

    return (
        <div id="Index">
            <div >
                <ProjectHeader header="Background Art" link="/portfolio" />
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
            </div>

            <div className="information">
                {payloads === null ? <div className="information">Whole lot of nothing</div>
                    : payloads.map((payload, i) => {
                        return (
                            <BackgroundCard payload={payload} />
                        );
                    })}
            </div>

            <Card className="createCard">
                <AddBackground />
            </Card>

        </div>
    )
}

export default BackgroundIndex;