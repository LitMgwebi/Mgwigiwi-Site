import axios from "axios"
const {useEffect, useState} = require("react");

const GetAll = (dest) => {
    const [payloads, setPayloads] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(()=>{
        axios({
            method: "GET",
            url: `http://localhost:1500/${dest}/`
        }).then((res) => {
            if (res.data.error != null) {
                console.error(res.data.error);
                return;
            }
            setPayloads(res.data[dest])
            setIsPending(false);
            setError(null);
        }).catch((error) => {
            setIsPending(false);
            setError(error.response.data.error);
        });
    }, [dest]);

    return {payloads, error, isPending}
}

export {GetAll};