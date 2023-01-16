import axios from 'axios';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AnimationAdd() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [movements, setMovements] = useState("");
    const [preview, setPreview] = useState("");
    const [effects, setEffects] = useState("");
    const [backgrounds, setBackgrounds] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="section">
                <p>{status}</p>
                {error && <div className="error">{error}</div>}
                <h1>Create</h1>
                <div className="button-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/portfolio/concept"><button>Cancel</button></Link>
                </div>
            </div>

            <div className="contentContainer">
                <div className="titleInput">
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="descriptionInput">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="photosInput">
                    <label>Photos:</label>
                    <input
                        type="file"
                        name="photos"
                        accept="image/*"
                        onChange={(e) => { setPhotos(e.target.files) }}
                        multiple
                    />
                </div>
            </div>
        </form>
    )
}

export default AnimationAdd;