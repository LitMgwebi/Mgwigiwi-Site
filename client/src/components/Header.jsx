import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Header() {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => logout();
    return (
        <div id="Header">
            <div className="header">
                <p> Header</p>
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