import { GetAll } from "../../../hooks/useGet";
import AnimationCard from "./components/AnimationCard";
import ProjectHeader from "../../../components/ProjectHeader";
import { Link } from "react-router-dom";

function AnimationIndex(){
    const {payloads, isPending, error} = GetAll("animation")
    return(
        <div className="AnimationIndex">
            <div className="controlContainer">
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
                <div>
                    <button><Link to="/portfolio/animation/add">Add</Link></button>
                </div>
                <ProjectHeader header="Animation Art" link="/portfolio" />
            </div>
            <div className="contentContainer">
                {payloads && payloads.map((payload, i) => {
                    return (
                        <AnimationCard payload={payload} />
                    );
                })}
            </div>
        </div>
    );
}

export default AnimationIndex