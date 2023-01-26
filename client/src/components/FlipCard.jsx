import { Card, CardMedia } from "@material-ui/core";

const FlipCard = ({ handleFlip, contentHeader, imgLink }) => {
    return (
        <Card className="card" >
            <div onClick={handleFlip}>
                <div className="cardHeader">
                    <h3>{contentHeader}</h3>
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