import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [loadFlag, setLoadFlag] = useState(false);
    const [errFlag, setErrFlag] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setErrFlag(false);
            setLoadFlag(true);
            try {
                const { data } = await axios(url);
                setData(data);
            } catch (error) {
                setErrFlag(true);
            }
            setLoadFlag(false);
        };
        fetchData()
    }, [url]);

    return [ { data, loadFlag, errFlag }, setUrl ];
};

export default useDataApi;
