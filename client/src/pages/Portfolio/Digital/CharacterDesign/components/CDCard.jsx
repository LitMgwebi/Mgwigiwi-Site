import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

function CDCard({payload}) {
    
    return (
        <Card className="card">
            <Link
                to={`/portfolio/character-design/${payload._id}`}
                state={{stateId: payload._id}}
            >
                <CardHeader className="cardHeader" title={payload.nameOfCharacter}/>
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