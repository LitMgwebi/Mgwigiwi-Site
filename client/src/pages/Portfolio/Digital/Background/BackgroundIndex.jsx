import { GetAll } from "../../../../hooks/useGet";
import { Card } from "@material-ui/core";
import BackgroundCard from "./components/BackgroundCard";
import AddBackground from "./components/AddBackground";
import DigitalHeader from "../../../../components/DigitalHeader";
import { useAuthContext } from "../../../../hooks/useAuthContext";

function BackgroundIndex() {
    const { payloads, isPending, error } = GetAll("background");
    console.log(payloads)
    const { user } = useAuthContext();

    return (
        <div id="BackgroundIndex">
            <div className="section">
                <DigitalHeader header="Background Art" link="/portfolio" />
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
            </div>
            <div className="information">
                {payloads === null ? <div className="information">Whole lot of nothing</div>
                    : payloads.map((payload, i) => {
                        return (
                            <BackgroundCard payload={payload}/>
                        );
                    })}
            </div>

            {user && (
                <Card className="createCard">
                    <AddBackground />
                </Card>
            )}

        </div>
    )
}

export default BackgroundIndex;