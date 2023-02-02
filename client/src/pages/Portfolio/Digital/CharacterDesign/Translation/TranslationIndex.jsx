import axios from "axios";
import Slider from "../../../../../components/Slider";
import { useState } from "react";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import baseUrl from "../../../../../components/baseUrl";

function TranslationIndex({ payload }) {
    const process = Array.from(payload.process);
    const [error, setError] = useState(null)
    const { user } = useAuthContext();
    const {url} = baseUrl;

    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }

    function handleDelete() {
        axios({
            method: "DELETE",
            url: `${url}/translation/${payload._id}`,
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }).then((res) => {
            // setIsPending(false);
            setError(null);
        }).catch((error) => {
            console.error(error.message);
            // setIsPending(false);
            setError(error.response.data.error);
        });
    }
    return (
        <div className="translationIndex">
            <div className="controls">
                {error && <div className="error">{error}</div>}
                {/* {isPending && <div>Loading...</div>} */}

                {user && (
                    <div className="button-group">
                        <button onClick={handleConfirm} className="btn btn-danger">
                            Delete
                        </button>
                    </div>
                )}
            </div>

            <div className="translationInformation">
                <p>{payload.description}</p>
                <div className="translationSlider">
                    <Slider photos={process} title="process Image" />
                </div>
            </div>
        </div>
    )
}

export default TranslationIndex;