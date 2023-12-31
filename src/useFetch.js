import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState();

    useEffect(()=> {
        const abortCont = new AbortController();
        fetch(url, { signal : abortCont.signal })
        .then(res => {
            if(!res.ok){
                throw Error ('Could not fetch the data for that resource')
            }
            return res.json();
        }).then(data => {
            setData(data)
            setIsPending(false)
            setError()
        })
        .catch(err => {
            if (err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            setIsPending(false);
            setError(err.message);
        })
    }, [url])

    return {
        data, isPending, error
    }
}
 
export default useFetch;