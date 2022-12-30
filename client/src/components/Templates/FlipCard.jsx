import {Card, CardContent, CardMedia, CardActions} from "@material-ui/core";

function FlipCard({handleClick, contentHeader,imgLink, tagLine}){
    return(
        <div className="collapseSiteCard">
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

                    <CardActions>
                        <button className="cardButton" onClick={()=> {
                            handleClick()}}
                        >
                            View
                        </button>
                    </CardActions> 
                </CardContent>   
            </Card>
        </div>
    );
}

export default FlipCard;