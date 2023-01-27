import { Card, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

function LinkCard({ routeLink, contentHeader, imgLink }) {
    return (
        <Card className="card">
            <Link
                to={routeLink}
            >
                <div className="cardHeader">
                    <h4>{contentHeader}</h4>
                </div>
                <CardMedia
                    component="img"
                    alt={contentHeader}
                    image={imgLink}
                    className="cardMedia"
                />
            </Link>
        </Card>
    );
}

export default LinkCard;