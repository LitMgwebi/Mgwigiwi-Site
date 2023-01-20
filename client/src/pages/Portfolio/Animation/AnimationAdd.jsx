import axios from 'axios';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectHeader from '../../../components/ProjectHeader';

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

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("preview", preview);
        for (let i = 0; i < movements.length; i++) {
            formData.append("movements", movements[i]);
        }
        for (let i = 0; i < effects.length; i++) {
            formData.append("effects", effects[i]);
        }
        for (let i = 0; i < backgrounds.length; i++) {
            formData.append("backgrounds", backgrounds[i]);
        }

        axios({
            method: "POST",
            url: 'http://localhost:1500/animation/add',
            data: formData,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) => {
            setError(null);
            setStatus(res.data.message)
        }).catch((error) => {
            setError(error.response.data.error);
            console.error(error.response.data.error);
        })
        navigate("/portfolio/animation")
    }
    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <ProjectHeader header="Add Animation" link="/portfolio/animation" />
            <div className="formInput">
                <div className="singleLineInput">
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="photoInput">
                    <label>Preview:</label>
                    <input
                        type="file"
                        accept="image/*"
                        name="preview"
                        required
                        onChange={(e) => setPreview(e.target.files[0])}
                    />
                </div>
                <div className="multilineInput">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={description}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="photoInput">
                    <label>Movements:</label>
                    <input
                        type="file"
                        required
                        name="movements"
                        accept="image/*"
                        onChange={(e) => { setMovements(e.target.files) }}
                        multiple
                    />
                </div>
                <div className="photoInput">
                    <label>Backgrounds:</label>
                    <input
                        type="file"
                        name="backgrounds"
                        required
                        accept="image/*"
                        onChange={(e) => { setBackgrounds(e.target.files) }}
                        multiple
                    />
                </div>
                <div className="photoInput">
                    <label>Effects:</label>
                    <input
                        type="file"
                        name="effects"
                        required
                        accept="image/*"
                        onChange={(e) => { setEffects(e.target.files) }}
                        multiple
                    />
                </div>
            </div>
            <div className="controls">
                <p>{status}</p>
                {error && <div className="error">{error}</div>}
                <div className="button-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/portfolio/concept"><button>Cancel</button></Link>
                </div>
            </div>
        </form>
    )
}

export default AnimationAdd;