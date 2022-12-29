import axios from 'axios';

const url = "http://localhost:5000";

export const getPhoto = (prompt) => {
    const out = {
        "prompt": prompt
    };
    return axios.post(url, out);
};