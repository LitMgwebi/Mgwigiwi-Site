import { GetAll } from "../../../../hooks/useGet";
import ConceptCard from "./components/ConceptCard";
import { Link } from "react-router-dom";
import DigitalHeader from "../../../../components/DigitalHeader";

function ConceptIndex() {
    const { payloads, isPending, error } = GetAll("concept");

    return (
        <div id="Index">
            <div className="section">
                <DigitalHeader header="Concept Art" link="/portfolio" />
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
                <div className="addButton">
                    <button><Link to="/portfolio/concept/add">+</Link></button>
                </div>
            </div>
            <div className="information">
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