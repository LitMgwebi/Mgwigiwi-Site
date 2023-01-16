import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function TranslationAdd({id}) {
    const [process, setProcess] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("description", description);
        for(let i = 0; i < process.length; i++){
            formData.append("process", process[i]);
        }
        formData.append("characterDesign", id)

        axios({
            method: "POST",
            url: "http://localhost:1500/translation/add",
            data: formData,
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data`,
            },
        }).then((res) => {
            setError(null);
            setStatus(res.data.message)
        }).catch((error) => {
            console.error(error.response.data.error);
            setError(error.response.data.error);
        });
    }
    return(
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
                    <div className="descriptionInput">
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="photosInput">
                        <label>Process:</label>
                        <input
                            type="file"
                            name="process"
                            accept="image/*"
                            onChange={(e) => {setProcess(e.target.files)}}
                            multiple
                        />
                    </div>
                </div>
        </form>
    )
}

export default TranslationAdd;