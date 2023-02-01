import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import sun from "../media/logos/sun.svg";
import moon from "../media/logos/moon.svg";
import login from "../media/logos/login.png";
import logOut from "../media/logos/logout.png";
import signup from "../media/logos/signup.png";

function Header({ theme, imgIcon }) {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => logout();
    return (
        <div id="Header">
            <div className="header">
                <p ><Link to="/">Mo's Site</Link></p>
                <div className="headerButton">
                    {imgIcon === "dark" ? <img src={sun} onClick={theme} className="headerLogo" alt="theme" />
                        : <img src={moon} onClick={theme} className="headerLogo" alt="theme" />}
                </div>
            </div>

            <div className="profile">
                <nav>
                    {user && (
                        <div className="log">
                            <span>{user.email}</span>
                            <img src={logOut} onClick={handleClick} className="headerLogo" alt="logout" />
                        </div>
                    )}
                    {!user && (
                        <div className="log">
                            <Link to="/login"><img src={login} className="headerLogo" alt="login" /></Link>
                            <Link to="/signup"><img src={signup} className="headerLogo" alt="signup" /></Link>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    )
}

export default Header;