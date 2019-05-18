import axios from 'axios';
import queryString from 'query-string';
import { ACCESS_TOKEN } from '../constants';

const request = () => {
    var token = '';
    if(localStorage.getItem("accessToken")) {
        token = localStorage.getItem("accessToken");
    }
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }
    };

    return headers;
};

export const login = (socialType) => axios.get('/oauth2/authorization/' + socialType);
export const getMainInfo = () => axios.get('/api/main');