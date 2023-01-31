import { Card, CardMedia } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../../../../../hooks/useAuthContext";

function BackgroundCard({ payload, refreshPage }) {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const { user } = useAuthContext();

    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }

    function handleDelete() {
        axios({
            method: "DELETE",
            url: `http://localhost:1500/background/${payload._id}`,
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }).then((res) => {
            setIsPending(false);
            setError(null);
            payload = null;
        }).catch((error) => {
            console.error(error.message);
            setIsPending(false);
            setError(error.response.data.error);
        });
        refreshPage();
    }

    return (
        <div>
            {user ?
                <Card className="backgroundCard" onClick={handleConfirm}>
                    <CardMedia
                        component="img"
                        alt={payload.title}
                        image={payload.photo}
                        className="cardMedia"
                    />

                    <div className="cardHeader">
                        <h4>{payload.title}</h4>
                        {error && <div className="error">{error}</div>}
                        {isPending && <div>Loading...</div>}
                    </div>
                </Card> :
                <Card className="backgroundCard" onClick={handleConfirm}>
                    <CardMedia
                        component="img"
                        alt={payload.title}
                        image={payload.photo}
                        className="cardMedia"
                    />

                    <div className="cardHeader">
                        <h4>{payload.title}</h4>
                        {error && <div className="error">{error}</div>}
                        {isPending && <div>Loading...</div>}
                    </div>
                </Card>}
        </div>
    )
}

export default BackgroundCard;