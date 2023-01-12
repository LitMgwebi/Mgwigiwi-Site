import { Card, CardContent, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

function CDCard({payload}) {
    
    return (
        <Card className="card">
            <Link
                to={`/portfolio/character-design/${payload._id}`}
                state={{stateId: payload._id}}
            >
                <CardMedia
                    component="img"
                    alt={payload.nameOfCharacter}
                    image={payload.originalCharacter}
                    className="cardMedia"
                />
                <CardContent className='cardContent'>
                    <h3 className="cardHeader">{payload.nameOfCharacter}</h3>
                </CardContent>
            </Link>
        </Card>
    );
}

export default CDCard