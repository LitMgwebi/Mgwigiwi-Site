import { Link } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";

function Home() {
    return (
        <div id="Index">
            <ProjectHeader header="Home" link="home" />
            <Link to="/portfolio">
                Portfolio
            </Link>
            <div className="Index">
                Home page
            </div>
        </div>
    )
}

export default Home;