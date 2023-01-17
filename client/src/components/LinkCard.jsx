import { Card, CardHeader, CardContent, CardMedia, CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";

function LinkCard({ routeLink, contentHeader, imgLink, tagLine }) {
    return (
        <Card className="card">
            <CardHeader className="cardHeader" title={contentHeader} />
            <CardMedia
                component="img"
                alt={contentHeader}
                image={imgLink}
                className="cardMedia"
            />
            <CardContent className='cardContent'>
                <p className="cardTagLine">{tagLine}</p>
                <CardActionArea className="cardActionArea">
                    <Link
                        to={routeLink}
                    >
                        <button className="cardButton">
                            View
                        </button>
                    </Link>
                </CardActionArea>
            </CardContent>
        </Card>
    );
}

export default LinkCard;