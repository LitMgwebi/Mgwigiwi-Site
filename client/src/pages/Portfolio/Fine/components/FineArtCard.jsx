import ReactCardFlip from "react-card-flip";
import { Card, CardMedia, CardActionArea } from "@material-ui/core";
import FineArtCardFlipped from "./FineArtCardFlipped";
import { useState } from "react"

function FineArtCard({ payload }) {
    const [flip, setFlip] = useState(false);

    function flipCard(e) {
        setFlip(!flip);
    }
    return (
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
            <Card className="card">
                <CardMedia
                    component="img"
                    alt={payload.title}
                    image={payload.photo}
                    className="cardMedia"
                />
                <CardActionArea className="cardContent">
                    <button onClick={flipCard} className="flipButton">
                        Flip
                    </button>
                </CardActionArea>
            </Card>
            <Card className="card">
                <FineArtCardFlipped payload={payload} flipCard={flipCard} />
            </Card>
        </ReactCardFlip>
    )
}

export default FineArtCard;