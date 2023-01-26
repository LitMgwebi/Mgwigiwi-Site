import { Card, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

function ConceptCard({ payload }) {
    return (
        <Card className="card">
            <Link
                to={`/portfolio/concept/${payload._id}`}
                state={{ stateId: payload._id }}
            >
                <div className="cardHeader">
                    <h3>{payload.title}</h3>
                </div>
                <CardMedia
                    component="img"
                    alt={payload.title}
                    image={payload.photos[0]}
                    className="cardMedia"
                />
            </Link>
        </Card>
    );
}

export default ConceptCard;