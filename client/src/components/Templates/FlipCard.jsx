import { Card, CardContent, CardMedia, CardActionArea} from "@material-ui/core";

const FlipCard = ({ handleFlip, contentHeader, imgLink, tagLine }) => {
    return (
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
                    <button className="cardButton" onClick={ handleFlip }>
                        Flip
                    </button>
                </CardActionArea>
            </CardContent>
        </Card>
    );
}

export default FlipCard;