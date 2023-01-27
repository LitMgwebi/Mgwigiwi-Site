import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import { GetAllTranslation, GetOneCharacterDesign } from "../../../../hooks/useGet";
import TranslationIndex from "./Translation/TranslationIndex";

function CharacterDesignRecord() {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.stateId;

    const { payload, isPending, error, setIsPending, setError } = GetOneCharacterDesign(id);

    const { payloads } = GetAllTranslation(id)

    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }

    function handleDelete() {
        axios({
            method: "DELETE",
            url: `http://localhost:1500/characterDesign/${id}`
        }).then((res) => {
            setIsPending(false);
            setError(null);
            navigate("/portfolio/character-design")
        }).catch((error) => {
            console.error(error.message);
            setIsPending(false);
            setError(error.response.data.error);
        });
    }

    return (
        <div id="Record">
            <div className="section">
                <h2 id="ProjectHeader">{payload.nameOfCharacter}</h2>

                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}

                <div className="button-group">
                    <Link to="/portfolio/character-design/"><button className="btn btn-secondary">Back</button></Link>
                    <button onClick={handleConfirm} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>

            <div className="information">
                <img src={payload.originalCharacter} alt={payload.nameOfCharacter} />
            </div>
            

            <h3 className="ProjectHeader">Translations</h3>
            <div className="translations">
                {payloads && payloads.map((payload, i) => {
                    return (
                        <TranslationIndex payload={payload} />
                    );
                })}
            </div>
        </div>
    )
}

export default CharacterDesignRecord;