import { useState, useEffect } from "react";


const useFetch = (url) => {


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);


    const executeFetch = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        executeFetch();
    }, [url]);


    return { loading, error, data };

}



export default useFetch;