import { Link } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";

function Home() {
    return(
        <div className="home">
        <ProjectHeader header="Home" link="home"/>
        <Link to="/portfolio">
            Portfolio
        </Link>
        <div className="ContentContainer">
            Home page
        </div>
    </div>
    )
}

export default Home;