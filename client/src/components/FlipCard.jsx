import { Card, CardContent, CardMedia, CardHeader, CardActionArea } from "@material-ui/core";

const FlipCard = ({ handleFlip, contentHeader, imgLink, tagLine }) => {
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
                    <button className="cardButton" onClick={handleFlip}>
                        Flip
                    </button>
                </CardActionArea>
            </CardContent>
        </Card>
    );
}

export default FlipCard;