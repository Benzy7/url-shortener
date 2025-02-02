import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RedirectPage = () => {
    const { shortId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/url/${shortId}`);                
                if (response.data.success && response.data.originalUrl) {
                    window.location.href = response.data.originalUrl;
                } else {
                    throw new Error();
                }
            } catch (err) {
                setLoading(false);
                navigate('/error/404');
            }
        };

        fetchUrl();
    }, [shortId, navigate]);

    return loading ? <div className="text-center mt-5">Loading...</div> : null;
};

export default RedirectPage;
