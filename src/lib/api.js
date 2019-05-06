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

export const login = ({usernameOrEmail, password}) => axios.post('/api/auth/login', {usernameOrEmail, password});