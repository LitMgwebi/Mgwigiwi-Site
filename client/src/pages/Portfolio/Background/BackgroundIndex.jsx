import { GetAll } from "../../../hooks/useGet";
import { Card } from "@material-ui/core";
import BackgroundCard from "./components/BackgroundCard";
import AddBackground from "./components/AddBackground";

function BackgroundIndex() {
    const { payloads, isPending, error } = GetAll("background");

    return (
        <div>
            <div>
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
                <h2>Background Art</h2>
            </div>

            <div>
                <Card className="card">
                    <AddBackground />
                </Card>
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