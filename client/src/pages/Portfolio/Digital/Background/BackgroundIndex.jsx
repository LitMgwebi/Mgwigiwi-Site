import { GetAll } from "../../../../hooks/useGet";
import { Card } from "@material-ui/core";
import BackgroundCard from "./components/BackgroundCard";
import AddBackground from "./components/AddBackground";
import ProjectHeader from "../../../../components/ProjectHeader";

function BackgroundIndex() {
    const { payloads, isPending, error } = GetAll("background");

    return (
        <div>
            <div>
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
                <ProjectHeader header="Background Art" link="/portfolio"/>
            </div>


            <div className="cardForm">
            <Card className="createCard">
                    <AddBackground />
                </Card>
            </div>

            <div className="contentContainer">
                {payloads && payloads.map((payload, i) => {
                    return (
                        <BackgroundCard payload={payload} />
                    );
                })}
            </div>
        </div>
    )
}

export default BackgroundIndex;