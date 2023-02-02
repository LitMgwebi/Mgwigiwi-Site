import AnimationTemplate from "./components/AnimationTemplate";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import { GetOneAnimation } from "../../../hooks/useGet";
import { useAuthContext } from "../../../hooks/useAuthContext";
import baseUrl from "../../../components/baseUrl";

function AnimationRecord() {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.stateId;
    const { user } = useAuthContext();
    const {url} = baseUrl;

    const { payload, isPending, error, setIsPending, setError } = GetOneAnimation(id);

    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }

    function handleDelete() {
        axios({
            method: "DELETE",
            url: `${url}/animation/${id}`,
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }).then((res) => {
            setIsPending(false);
            setError(null);
            navigate("/portfolio/animation")
        }).catch((error) => {
            console.error(error.message);
            setIsPending(false);
            setError(error.response.data.error);
        });
    }
    return (
        <div id="Record">
            <div className="controls">
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}


                <div className="button-group">
                    <button className="btn btn-secondary"><Link to="/portfolio/animation/">Back</Link></button>
                    {user && (
                        <button onClick={handleConfirm} className="btn btn-danger">
                            Delete
                        </button>
                    )}
                </div>
            </div>
            <div className="information">
                <h2>{payload.title}</h2>
                <p>{payload.description}</p>
                <img src={payload.preview} alt={payload.title} />
                <AnimationTemplate payload={payload} />
            </div>
        </div>
    )
}

export default AnimationRecord;