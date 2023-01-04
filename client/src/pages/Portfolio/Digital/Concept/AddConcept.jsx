import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddConcept(){
    const [photos, setPhotos] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.files)
        console.info(`Title: ${title}\n, Description: ${description}\n, Photos: ${photos}`)
        const formData = new FormData();
    }

    return(
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="section">
                {error && <div className="error">{error}</div>}
                <h1>Create</h1>
                <div className="button-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/portfolio"><button>Cancel</button></Link>
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
                            onChange={(e) => setPhotos(e.target.files)}
                            multiple
                        />
                    </div>
                </div>
            </div>


        </form>
    )
}

export default AddConcept;