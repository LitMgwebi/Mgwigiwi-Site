import axios from "axios"
const { useEffect, useState } = require("react");

const GetAll = (dest) => {
    const [payloads, setPayloads] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:1500/${dest}/`
        }).then((res) => {
            if (res.data.error != null) {
                console.error(res.data.error);
                return;
            }
            if (res.data) {
                setPayloads(res.data[dest])
                setError(null);
            } else {
                setError("There are no entries in the database")
            }
            setIsPending(false);
        }).catch((error) => {
            setIsPending(false);
            setError(error.response.data.error);
        });
    }, [dest]);

    return { payloads, error, isPending, setIsPending, setError }
}

//#region GET 1

const GetOneConcept = (id) => {
    const [payload, setPayload] = useState({
        title: "",
        description: "",
        photos: "",
    });
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:1500/concept/${id}`
        }).then((res) => {
            const update = {
                title: res.data.concept.title,
                description: res.data.concept.description,
                photos: res.data.concept.photos
            }
            setPayload(payload => ({
                ...payload,
                ...update
            }));
            setIsPending(false);
            setError(null);
        }).catch((error) => {
            setIsPending(false);
            setError(error.response.data.error);
        })
    }, [id]);
    return { payload, isPending, error, setIsPending, setError }
}

const GetOneCharacterDesign = (id) => {
    const [payload, setPayload] = useState({
        nameOfCharacter: "",
        originalCharacter: "",
    });
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:1500/characterDesign/${id}`
        }).then((res) => {
            const update = {
                nameOfCharacter: res.data.characterDesign.nameOfCharacter,
                originalCharacter: res.data.characterDesign.originalCharacter
            }

            setPayload(payload => ({
                ...payload,
                ...update
            }));
            setIsPending(false);
            setError(null);
        }).catch((error) => {
            setIsPending(false);
            setError(error.response.data.error)
        })
    }, [id]);

    return { payload, isPending, error, setIsPending, setError }
}
//#endregion

export { GetAll, GetOneConcept, GetOneCharacterDesign };