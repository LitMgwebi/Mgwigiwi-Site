import { Card, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

function CDCard({ payload }) {

    return (
        <Card className="card">
            <Link
                to={`/portfolio/character-design/${payload._id}`}
                state={{ stateId: payload._id }}
            >
                <div className="cardHeader">
                    <h3>{payload.nameOfCharacter}</h3>
                </div>
                <CardMedia
                    component="img"
                    alt={payload.nameOfCharacter}
                    image={payload.originalCharacter}
                    className="cardMedia"
                />
            </Link>
        </Card>
    );
}

export default CDCard