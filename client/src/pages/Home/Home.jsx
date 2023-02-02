import { Link } from "react-router-dom";
import porfolio from "../../media/logos/portfolio.png"
import twitter from "../../media/logos/twitter.png";
import instagram from "../../media/logos/instagram.png";

function Home() {
    return (
        <div id="Home">
            <div className="intro">
                <div className="introContent">
                    <h2>Moyisi Mgwigiwi</h2>
                    <div className="portfolioLink">
                        <Link to="/portfolio">
                            <img src={porfolio} className="portfolioIcon" alt="Portfolio" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="links">
                <div className="linkCard">
                    <a
                        href="//"
                        style={{ backgroundColor: "#1DA1F2" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={twitter} className="headerLogo" alt="Twitter" />
                    </a>
                </div>
                <div className="linkCard">
                    <a 
                        style={{ backgroundImage: "linear-gradient(to right, #F58529, #FEDA77, #DD2A7B, #8134AF, #515BD4)" }}
                        href="//"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={instagram} className="headerLogo" alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;