import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

function ConceptCard({ payload }) {
    return (
        <Card className="card">
            <Link
                to={`/portfolio/concept/${payload._id}`}
                state={{stateId: payload._id}}
            >
                <CardHeader className="cardHeader" title={payload.title}/>
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