import axios from "axios"
import { useEffect, useState } from "react";

const GetConcept = (id) => {
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
    return{payload, isPending, error, setIsPending, setError}
}

export default GetConcept;