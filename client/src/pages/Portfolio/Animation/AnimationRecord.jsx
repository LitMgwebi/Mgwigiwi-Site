import AnimationTemplate from "./components/AnimationTemplate";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import { GetOneAnimation } from "../../../hooks/useGet";

function AnimationRecord(){
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.stateId;
    
    const { payload, isPending, error, setIsPending, setError } = GetOneAnimation(id);
    
    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }
    
    function handleDelete() {
        axios({
            method: "DELETE",
            url: `http://localhost:1500/animation/${id}`
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
    return(
        <div id="Record">
            <div className="controls">
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}


                <div className="button-group">
                    <Link to="/portfolio/animation/"><button>Back</button></Link>
                    <button onClick={handleConfirm}>
                        Delete
                    </button>
                </div>
            </div>
            <div className="information">
                <h2>{payload.title}</h2>
                <p>{payload.description}</p>
                <img src={payload.preview} alt={payload.title} />
                <AnimationTemplate payload={payload}/>
            </div>
        </div>
    )
}

export default AnimationRecord;