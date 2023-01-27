import { Card, CardMedia } from "@material-ui/core";

const FlipCard = ({ handleFlip, contentHeader, imgLink }) => {
    return (
        <Card className="card" >
            <div onClick={handleFlip}>
                <div className="cardHeader">
                    <h4>{contentHeader}</h4>
                </div>
                <CardMedia
                    component="img"
                    alt={contentHeader}
                    image={imgLink}
                    className="cardMedia"
                />
            </div>
        </Card>
    );
}

export default FlipCard;