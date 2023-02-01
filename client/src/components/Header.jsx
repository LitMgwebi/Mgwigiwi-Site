import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import sun from "../media/logos/sun.svg"
import moon from "../media/logos/moon.svg"

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
                        <div className="loggedIn">
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Logout</button>
                        </div>
                    )}
                    {!user && (
                        <div className="loggedOUT">
                            <button><Link to="/login">Login</Link></button>
                            <button><Link to="/signup">Signup</Link></button>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    )
}

export default Header;