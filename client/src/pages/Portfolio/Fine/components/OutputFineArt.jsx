import FineArtCard from "./FineArtCard";

function OutputFineArt({ payloads }) {
    const { landscape, portrait, other } = payloads
    return (
        <div className="outputPayload">
            <h3 id="ProjectHeader">Landscape</h3>
            <div className="information">
                {Object.keys(landscape).length > 0 ? landscape.map((landscape) => {
                    return (
                        <FineArtCard payload={landscape} />
                    );
                }) : <h3>Whole lotta nothing</h3>}
            </div>

            <h3 id="ProjectHeader">Portrait</h3>
            <div className="information">
                {Object.keys(portrait).length > 0 ? portrait.map((portrait) => {
                    return (
                        <FineArtCard payload={portrait} />
                    )
                }) : <div>Whole lotta nothing</div>}
            </div>



            <h3 className="ProjectHeader">Other</h3>
            <div className="information">
                {Object.keys(other).length > 0 ? other.map((other) => {
                    return (
                        <FineArtCard payload={other} />
                    )
                }) : <h3>Whole lotta nothing</h3>}
            </div>
        </div>
    );
}

export default OutputFineArt