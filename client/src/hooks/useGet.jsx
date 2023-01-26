import axios from "axios"
import { useEffect, useState } from "react";

//#region GET ALL
const GetAll = (dest) => {
    const [payloads, setPayloads] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:1500/${dest}/`
        }).then((res) => {
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

const GetAllTranslation = (id) => {
    const [payloads, setPayloads] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:1500/translation/`,
            params:{
                characterDesign: id
            }
        }).then((res) => {
            if (res.data) {
                setPayloads(res.data.translation)
                setError(null);
            } else {
                setError("There are no entries in the database")
            }
            setIsPending(false);
        }).catch((error) => {
            setIsPending(false);
            setError(error.response.data.error);
        });
    }, [id]);

    return { payloads, error, isPending, setIsPending, setError }
}
//#endregion

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

const GetOneAnimation = (id) => {
    const [payload, setPayload] = useState({
        title: "",
        preview: "",
        description: "",
        movements: "",
        backgrounds: "",
        effects: ""
    });
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:1500/animation/${id}`
        }).then((res) => {
            const update = {
                title: res.data.animation.title,
                preview: res.data.animation.preview,
                description: res.data.animation.description,
                movements: res.data.animation.movements,
                backgrounds: res.data.animation.backgrounds,
                effects: res.data.animation.effects
            }
            setPayload(payload => ({
                ...payload,
                ...update
            }));
            setIsPending(false);
            setError(null);
        }).catch((error) => {
            setIsPending(false);
            setError(error);
        })
    }, [id]);

    return {payload, isPending, error, setIsPending, setError};
}
//#endregion

export { GetAll, GetOneConcept, GetOneCharacterDesign, GetAllTranslation, GetOneAnimation};