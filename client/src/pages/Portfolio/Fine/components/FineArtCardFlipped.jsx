import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import baseUrl from "../../../../components/baseUrl";

function FineArtCardFlipped({ payload, flipCard }) {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const { user } = useAuthContext();
    const {url} = baseUrl

    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }

    function handleDelete() {
        axios({
            method: "DELETE",
            url: `${url}/fineArt/${payload._id}`,
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }).then((res) => {
            setIsPending(false);
            setError(null);
        }).catch((error) => {
            console.error(error.message);
            setIsPending(false);
            setError(error.response.data.error);
        });
        window.location.reload(false)
    }

    return (
        <div className="fineArtFlipped">
            <div className='fineArtHeader'>
                <h4>{payload.title}</h4>
            </div>
            <div className="fineArtInformation">

                <p>{payload.description}</p>
                <p>{payload.dimension}</p>
            </div>

            <div className="controls">

                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
                <div className="button-group">
                    <button onClick={flipCard} className="btn btn-secondary">
                        Flip
                    </button>
                    {user && (
                        <button onClick={handleConfirm} className="btn btn-danger">
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FineArtCardFlipped