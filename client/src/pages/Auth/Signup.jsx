import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password);
    }
    return (
        <form className="authForm" onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <div className="formInput">
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
                    <button disabled={isLoading} type='submit' className="btn btn-primary">Sign up</button>
                    <Link to="/"><button className="btn btn-secondary">Back</button></Link>
                </div>
            </div>

        </form>
    );
}

export default Signup;