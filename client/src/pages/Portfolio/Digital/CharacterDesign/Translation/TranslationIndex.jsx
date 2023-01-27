import axios from "axios";
import Slider from "../../../../../components/Slider";
import { useState } from "react";

function TranslationIndex({payload}){
    const process = Array.from(payload.process);
    const [error, setError] = useState(null)

    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }
    
    function handleDelete() {
        axios({
            method: "DELETE",
            url: `http://localhost:1500/translation/${payload._id}`
        }).then((res) => {
            // setIsPending(false);
            setError(null);
        }).catch((error) => {
            console.error(error.message);
            // setIsPending(false);
            setError(error.response.data.error);
        });
    }
    return(
        <div className="translationIndex">
            <div className="controls">
                {error && <div className="error">{error}</div>}
                {/* {isPending && <div>Loading...</div>} */}


                <div className="button-group">
                    <button onClick={handleConfirm} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>

            <div className="translationInformation">
                <p>{payload.description}</p>
                <Slider photos={process} title="process Image"/>
            </div>
        </div>
    )
}

export default TranslationIndex;