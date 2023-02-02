import axios from "axios"
import { useEffect, useState } from "react";
import baseUrl from "../components/baseUrl";

//#region GET ALL
const GetAll = (dest) => {
    const [payloads, setPayloads] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [status, setStatus] = useState(null);
    const {url} = baseUrl;

    useEffect(() => {
        axios({
            method: "GET",
            url: `${url}/${dest}`
        }).then((res) => {
            setError(null);
            if (res.data) {
                setPayloads(res.data[dest]);
                setStatus(res.data.message);
            } else {
                setStatus("There are no entries in the database")
            }
            setIsPending(false);
        }).catch((error) => {
            setIsPending(false);
            setError(error.message);
            setStatus(error.response.data.error);
        });
    }, [dest, url]);

    return { payloads, error, isPending, status, setIsPending, setError, setStatus}
}

const GetAllTranslation = (id) => {
    const [payloads, setPayloads] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [status, setStatus] = useState(null);
    const {url} = baseUrl;

    useEffect(() => {
        axios({
            method: "GET",
            url: `${url}/translation/`,
            params:{
                characterDesign: id
            }
        }).then((res) => {
            setError(null);
            if (res.data) {
                setPayloads(res.data.translation)
                setStatus(res.data.message);
            } else {
                setError("There are no entries in the database")
            }
            setIsPending(false);
        }).catch((error) => {
            setIsPending(false);
            setStatus(error.response.data.error);
            setError(error.message);
        });
    }, [id, url]);

    return { payloads, error, isPending, status, setIsPending, setError, setStatus}
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
    const [status, setStatus] = useState(null);
    const {url} = baseUrl;

    useEffect(() => {
        axios({
            method: "GET",
            url: `${url}/concept/${id}`
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
            setStatus(res.data.message);
        }).catch((error) => {
            setIsPending(false);
            setStatus(error.response.data.error);
            setError(error.message);
        })
    }, [id, url]);
    return { payload, isPending, error, status, setStatus, setIsPending, setError }
}

const GetOneCharacterDesign = (id) => {
    const [payload, setPayload] = useState({
        nameOfCharacter: "",
        originalCharacter: "",
    });
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const {url} = baseUrl;

    useEffect(() => {
        axios({
            method: "GET",
            url: `${url}/characterDesign/${id}`
        }).then((res) => {
            const update = {
                nameOfCharacter: res.data.characterDesign.nameOfCharacter,
                originalCharacter: res.data.characterDesign.originalCharacter
            }

            setPayload(payload => ({
                ...payload,
                ...update
            }));
            setStatus(res.data.message);
            setIsPending(false);
            setError(null);
        }).catch((error) => {
            setIsPending(false);
            setStatus(error.response.data.error)
            setError(error.message);
        })
    }, [id, url]);

    return { payload, isPending, error, status, setStatus, setIsPending, setError }
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
    const [status, setStatus] = useState(null);
    const {url} = baseUrl;

    useEffect(() => {
        axios({
            method: "GET",
            url: `${url}/animation/${id}`
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
            setStatus(res.data.message);
        }).catch((error) => {
            setIsPending(false);
            setError(error.message);
            setStatus(error.response.data.error);
        })
    }, [id, url]);

    return {payload, isPending, error, status, setStatus, setIsPending, setError};
}
//#endregion

export { GetAll, GetOneConcept, GetOneCharacterDesign, GetAllTranslation, GetOneAnimation};