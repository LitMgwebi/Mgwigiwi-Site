import { GetAll } from "../../../../hooks/useGet";
import ConceptCard from "./components/ConceptCard";
import ProjectHeader from "../../../../components/Templates/ProjectHeader";
import { Link } from "react-router-dom";

function ConceptIndex() {
    const { payloads, isPending, error } = GetAll("concept");

    return (
        <div className="ConceptIndex">
            <div className="controlContainer">
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
                <div>
                    <button><Link to="/portfolio/concept/add">Add</Link></button>
                </div>
                <ProjectHeader header="Concept Art" link="/portfolio" />
            </div>
            <div className="contentContainer">
                {payloads && payloads.map((payload, i) => {
                    return (
                        <ConceptCard payload={payload} />
                    );
                })}
            </div>
        </div>
    );
}

export default ConceptIndex;