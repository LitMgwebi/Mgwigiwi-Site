import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import { GetOneConcept } from "../../../../hooks/useGet";
import Slider from "../../../../components/Slider";

function ConceptRecord() {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.stateId;

    const { payload, isPending, error, setIsPending, setError } = GetOneConcept(id);
    const photos = Array.from(payload.photos);

    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }

    function handleDelete() {
        axios({
            method: "DELETE",
            url: `http://localhost:1500/concept/${id}`
        }).then((res) => {
            setIsPending(false);
            setError(null);
            navigate("/portfolio/concept")
        }).catch((error) => {
            console.error(error.message);
            setIsPending(false);
            setError(error.response.data.error);
        });
    }

    return (
        <div id="Record">
            <div className="section">
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}

                <h2>{payload.title}</h2>

                <div className="button-group">
                    <Link to="/portfolio/concept/"><button className="btn btn-secondary">Back</button></Link>
                    <button onClick={handleConfirm} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>

            <div className="information">
                <div className="conceptDescription">

                    <p >{payload.description}</p>
                </div>
                <div className="conceptSlider">
                    <Slider photos={photos} title={payload.title} />
                </div>
            </div>
        </div>
    );
}

export default ConceptRecord;