import { Link } from "react-router-dom"

function DigitalHeader({ header, link }) {
    return (
        <div id="ProjectHeader">
            <div>
            {link !== "home" ?
                <Link 
                    to={link}
                    state={{fromDigital: true}}
                >
                    Back
                </Link>
                : <div></div>}
            </div>
            <div>
                <h1>{header}</h1>
            </div>
            <div>
                {link !== "home" ?
                
                <Link to="/">
                Home</Link>: <div></div>}
            </div>

        </div>
    );
}

export default DigitalHeader;