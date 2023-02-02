import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import baseUrl from "../../../../../components/baseUrl";

function TranslationAdd({ id }) {
    const [process, setProcess] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const [showButton, setShowButton] = useState(false);
    const { user } = useAuthContext();
    const {url} = baseUrl

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("description", description);
        for (let i = 0; i < process.length; i++) {
            formData.append("process", process[i]);
        }
        formData.append("characterDesign", id)

        axios({
            method: "POST",
            url: `${url}/translation/add`,
            data: formData,
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data`,
                'Authorization': `Bearer ${user.token}`,
            },
        }).then((res) => {
            setError(null);
            setStatus(res.data.message)
            setDescription("");
            setProcess("");
            setShowButton(true)
        }).catch((error) => {
            console.error(error.response.data.error);
            setError(error.response.data.error);
        });
    }
    return (
        <div id="Add">

            <h2 id="ProjectHeader">Add Translation</h2>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className="formInput">
                    <div className="multilineInput">
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="photoInput">
                        <label>Process:</label>
                        <input
                            type="file"
                            name="process"
                            accept="image/*"
                            onChange={(e) => { setProcess(e.target.files) }}
                            required
                            multiple
                        />
                    </div>
                </div>
                <div className="controls">
                    <p className="status">{status}</p>
                    {error && <div className="error">{error}</div>}
                    <div className="button-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        {showButton && <Link to="/portfolio/character-design"><button className="btn btn-secondary">Finish</button></Link>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TranslationAdd;