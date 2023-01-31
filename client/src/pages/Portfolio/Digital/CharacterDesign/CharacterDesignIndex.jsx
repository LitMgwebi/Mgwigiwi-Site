import { GetAll } from "../../../../hooks/useGet";
import CDCard from "./components/CDCard";
import { Link } from "react-router-dom";
import DigitalHeader from "../../../../components/DigitalHeader";
import { useAuthContext } from "../../../../hooks/useAuthContext";

function CharacterDesignIndex() {
    const { payloads, isPending, error } = GetAll("characterDesign");
    const { user } = useAuthContext();

    return (
        <div id="Index">
            <div className="section">
                <DigitalHeader header="Character Design" link="/portfolio" />
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
                {user && (
                    <div className="addButton">
                        <button className="btn btn-light"><Link to="/portfolio/character-design/add">+</Link></button>
                    </div>
                )}
            </div>
            <div className="information">
                {payloads === null ? <div className="information">Whole lot of nothing</div>
                    : payloads.map((payload, i) => {
                        return (
                            <CDCard payload={payload} />
                        );
                    })}
            </div>
        </div>
    )

}

export default CharacterDesignIndex;