import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectHeader from "../../../../components/ProjectHeader";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import baseUrl from "../../../../components/baseUrl";

function AddConcept() {
    const [photos, setPhotos] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const {url} = baseUrl;

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        for (let i = 0; i < photos.length; i++) {
            formData.append("photos", photos[i]);
        }

        axios({
            method: "POST",
            url: `${url}/concept/add`,
            data: formData,
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data`,
                'Authorization': `Bearer ${user.token}`,
            }
        }).then((res) => {
            setError(null);
            setStatus(res.data.message)
        }).catch((error) => {
            console.error(error.response.data.error);
            setError(error.response.data.error);
        });

        navigate("/portfolio/concept")
    }

    return (
        <div id="Add">
            <ProjectHeader header="Add Concept" link="/portfolio/concept" />
            <form onSubmit={handleSubmit} encType='multipart/form-data'>

                <div className="formInput">
                    <div className="singleLineInput">
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
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
                        <label>Photos:</label>
                        <input
                            type="file"
                            name="photos"
                            accept="image/*"
                            onChange={(e) => { setPhotos(e.target.files) }}
                            multiple
                            required
                        />
                    </div>
                </div>
                <div className="controls">
                    <p className="status">{status}</p>
                    {error && <div className="error">{error}</div>}
                    <div className="button-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/portfolio/concept"><button className="btn btn-secondary">Cancel</button></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddConcept;