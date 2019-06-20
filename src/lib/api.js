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
export const getOauth2User = () => axios.get('/api/user');

export const getUtubeInfoList = () => axios.get('/api/main/utube');
export const getInstagramInfoList = () => axios.get('/api/main/instagram');

export const getPost = (id) => axios.get(`/api/posts/${id}`);

//post 목록 가져오기
export const getPostList = ({ tag, page }) => axios.get(`/api/posts/?${queryString.stringify({ tag, page })}`);

