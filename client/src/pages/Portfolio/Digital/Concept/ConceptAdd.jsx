import axios from "axios";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

function AddConcept() {
    const [photos, setPhotos] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const navigate= useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        for(let i = 0; i < photos.length; i++){
            formData.append("photos", photos[i]);
        }
        
        axios({
            method: "POST",
            url: "http://localhost:1500/concept/add",
            data: formData,
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data`,
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
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="section">
                <p>{status}</p>
                {error && <div className="error">{error}</div>}
                <h1>Create</h1>
                <div className="button-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/portfolio"><button>Cancel</button></Link>
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
                            onChange={(e) => {setPhotos(e.target.files)}}
                            multiple
                        />
                    </div>
                </div>
        </form>
    )
}

export default AddConcept;