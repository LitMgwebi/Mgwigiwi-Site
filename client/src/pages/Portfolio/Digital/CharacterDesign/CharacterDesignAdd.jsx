import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import TranslationAdd from "./Translation/TranslationAdd";

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
        <div id="characterDesign">
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className="section">
                    <p>{status}</p>
                    {error && <div className="error">{error}</div>}
                    <h1>Create</h1>
                   { !showButton && <div className="button-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/portfolio/character-design"><button>Cancel</button></Link>
                    </div>}
                </div>

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
            </form>

            {showButton && <TranslationAdd id={id} />}
        </div>
    )
}

export default CharacterDesignAdd