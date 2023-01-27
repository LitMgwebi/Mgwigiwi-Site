import axios from "axios";
import { useState } from "react";

function FineArtCardFlipped({ payload, flipCard }) {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    
    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }

    function handleDelete() {
        axios({
            method: "DELETE",
             url: `http://localhost:1500/fineArt/${payload._id}`,
            //  headers: {
            //       'Authorization': `Bearer ${user.token}`
            //  }
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
            {error && <div className="error">{error}</div>}
            {isPending && <div>Loading...</div>}

            <h4 className='cardHeader'>{payload.title}</h4>
            <p>{payload.description}</p>
            <p>{payload.dimension}</p>

            <div className="button-group">
                <button onClick={flipCard} className="btn btn-secondary">
                    Flip
                </button>
                <button onClick={handleConfirm} className="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default FineArtCardFlipped