import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import { GetOneCharacterDesign } from "../../../../hooks/useGet";

function CharacterDesignRecord(){
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.stateId;
    
    const { payload, isPending, error, setIsPending, setError } = GetOneCharacterDesign(id);

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
            navigate("/portfolio/characterDesign")
        }).catch((error) => {
            console.error(error.message);
            setIsPending(false);
            setError(error.response.data.error);
        });
    }

    return(
        <div id="Record">
            <div className="section">
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}

                <h2>{payload.nameOfCharacter}</h2>

                <div className="button-group">
                    <Link to="/portfolio/characterDesign/"><button>Back</button></Link>
                    <button onClick={handleConfirm}>
                        Delete
                    </button>
                </div>
            </div>

            <div className="information">
                <img src={payload.originalCharacter} alt={payload.nameOfCharacter} />
            </div>
        </div>
    )
}

export default CharacterDesignRecord;