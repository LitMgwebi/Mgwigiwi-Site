import { Card, CardContent, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

function ConceptCard({ payload }) {
    return (
        <Card className="card">
            <Link
                to={`/portfolio/concept/${payload._id}`}
                state={{stateId: payload._id}}
            >
                <CardMedia
                    component="img"
                    alt={payload.title}
                    image={payload.photos[0]}
                    className="cardMedia"
                />
                <CardContent className='cardContent'>
                    <h3 className="cardHeader">{payload.title}</h3>
                </CardContent>
            </Link>
        </Card>
    );
}

export default ConceptCard;