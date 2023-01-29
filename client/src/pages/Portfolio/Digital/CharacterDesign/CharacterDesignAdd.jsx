import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import TranslationAdd from "./Translation/TranslationAdd";
import ProjectHeader from "../../../../components/ProjectHeader";

function CharacterDesignAdd() {
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const [nameOfCharacter, setNameOfCharacter] = useState("");
    const [originalCharacter, setOriginalCharacter] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [id, setId] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("nameOfCharacter", nameOfCharacter);
        formData.append("originalCharacter", originalCharacter);

        axios({
            method: "POST",
            url: "http://localhost:1500/characterDesign/add",
            data: formData,
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data`,
            }
        }).then((res) => {
            setError(null);
            setStatus(res.data.message)

            setId(res.data.characterDesign._id)
            setShowButton(true)
        }).catch((error) => {
            console.error(error.response.data.error);
            setError(error.response.data.error);
        });

    }
    return (
        <div id="Add">

            <ProjectHeader header="Add Character Design" link="/portfolio/animation" />
            <form onSubmit={handleSubmit} encType='multipart/form-data'>

                <div className="formInput">
                    <div className="singleLineInput">
                        <label>Name Of Character:</label>
                        <input
                            type="text"
                            name="nameOfCharacter"
                            value={nameOfCharacter}
                            onChange={(e) => setNameOfCharacter(e.target.value)}
                            required
                        />
                    </div>

                    <div className="singleLineInput">
                        <label>Original Character:</label>
                        <input
                            type="file"
                            accept="image/*"
                            name="originalCharacter"
                            onChange={(e) => setOriginalCharacter(e.target.files[0])}
                            required
                        />
                    </div>
                </div>
                <div className="controls">
                    <p className="status">{status}</p>
                    {error && <div className="error">{error}</div>}
                    {!showButton && <div className="button-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/portfolio/character-design"><button className="btn btn-danger">Cancel</button></Link>
                    </div>}
                </div>
            </form>

            {showButton && <TranslationAdd id={id} />}
        </div>
    )
}

export default CharacterDesignAdd