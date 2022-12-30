import { Card, CardMedia } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

function BackgroundCard({ payload }) {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);

    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }

    function handleDelete() {
        axios({
            method: "DELETE",
            url: `http://localhost:1500/background/${payload._id}`,
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
        <Card className="card">
            <div>
                <div className="cardHeader">{payload.title}</div>
                <button onClick={handleConfirm}>Delete</button>
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}
            </div>
            <CardMedia
                component="img"
                alt={payload.title}
                image={payload.photo}
                className="cardMedia"
            />
        </Card>
    )
}

export default BackgroundCard;