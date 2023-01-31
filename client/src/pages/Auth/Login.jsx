import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(email, password)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div id="Add">
        <h3>Login</h3>
            <form className="authForm" onSubmit={handleSubmit}>

                <div className="auth">
                    <div className="singleLineInput">
                        <label>Email: </label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className="singleLineInput">
                        <label>Password: </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="controls">
                    {error && <div className="error">{error}</div>}
                    <div className="button-group">
                        <button disabled={isLoading} type='submit' className="btn btn-primary">Login</button>
                        <Link to="/"><button className="btn btn-secondary">Back</button></Link>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Login;