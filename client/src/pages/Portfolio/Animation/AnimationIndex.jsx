import { GetAll } from "../../../hooks/useGet";
import AnimationCard from "./components/AnimationCard";
import ProjectHeader from "../../../components/ProjectHeader";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

function AnimationIndex() {
    const { payloads, isPending, status } = GetAll("animation");
    const { user } = useAuthContext();

    return (
        <div id="Index">
            <div className="section">
                <ProjectHeader header="Animation Art" link="/portfolio" />
                {status && <div className="error">{status}</div>}
                {isPending && <div>Loading...</div>}
                {user && (
                    <div className="addButton">
                        <button className="btn btn-light"><Link to="/portfolio/animation/add">+</Link></button>
                    </div>
                )}
            </div>
            <div className="information">
                {payloads === null ? <div className="information">Whole lot of nothing</div>
                    : payloads.map((payload, i) => {
                        return (
                            <AnimationCard payload={payload} />
                        );
                    })}
            </div>
        </div>
    );
}

export default AnimationIndex