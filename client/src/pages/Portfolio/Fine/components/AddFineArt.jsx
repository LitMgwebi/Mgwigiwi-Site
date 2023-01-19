import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddFineArt() {
    const [error, setError] = useState(null);

    const [title, setTitle] = useState("");
    const [physicalType, setPhysicalType] = useState("");
    const [dimension, setDimension] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append('title', title);
        // formData.append('physicalType', physicalType);
        // formData.append('dimension', dimension);
        // formData.append('description', description);
        // formData.append('photo', photo);

        const data = {
            title: title,
            physicalType: physicalType,
            dimension: dimension,
            photo: photo,
            description: description,
        }
        axios({
            method: 'POST',
            url: 'http://localhost:1500/fineArt/add',
            data: data,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) => {
            setError(null);
        }).catch((error) => {
            setError(error.response.data.error);
            console.error(error.response.data.error);
        });

        window.location.reload(false)
    }
    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>

            <h3>Add Fine art</h3>

            <div className="cardForm">
                <div className="singleLineInput">
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="selectInput">
                    <label>Type:</label>
                    <select
                        name="physicalType"
                        value={physicalType}
                        onChange={(e) => { setPhysicalType(e.target.value) }}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Landscape">Landscape</option>
                        <option value="Portrait">Portrait</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="singleLineInput">
                    <label>Dimension:</label>
                    <input
                        type="text"
                        name="dimension"
                        required
                        value={dimension}
                        onChange={(e) => setDimension(e.target.value)}
                    />
                </div>

                <div className="multilineInput">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="photoInput">
                    <label>Piece:</label>
                    <input
                        type="file"
                        required
                        accept="image/*"
                        name="photo"
                        onChange={(e) => setPhoto(e.target.files[0])}
                    />
                </div>
            </div>
            <div className="controls">
                {error && <div className="error">{error}</div>}
                <div className="button-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/"><button>Cancel</button></Link>
                </div>
            </div>
        </form>
    )
}

export default AddFineArt;