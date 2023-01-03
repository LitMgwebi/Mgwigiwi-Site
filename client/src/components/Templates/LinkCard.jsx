import {Card, CardContent, CardMedia, CardActionArea} from "@material-ui/core";
import { Link } from "react-router-dom";

function LinkCard({routeLink, contentHeader,imgLink, tagLine}){
    return(
        <Card className="card">
                <CardMedia
                    component="img"
                    alt={contentHeader}
                    image={imgLink}
                    className="cardMedia"
                />
                <CardContent className='cardContent'>
                    <h3 className="cardHeader">{contentHeader}</h3>
                    <p className="cardTagLine">{tagLine}</p>
                    <CardActionArea>
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