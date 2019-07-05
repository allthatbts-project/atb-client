import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_TWITTER_INFO_LIST = 'main/GET_TWITTER_INFO_LIST';
const GET_YOUTUBE_INFO_LIST = 'main/GET_YOUTUBE_INFO_LIST';
const GET_INSTAGRAM_INFO_LIST = 'main/GET_INSTAGRAM_INFO_LIST';

// action creators
export const getTwitterInfoList = createAction(GET_TWITTER_INFO_LIST, api.getTwitterInfoList);
export const getYoutubeInfoList = createAction(GET_YOUTUBE_INFO_LIST, api.getYoutubeInfoList);
export const getinstagramInfoList = createAction(GET_INSTAGRAM_INFO_LIST, api.getInstagramInfoList);

// initial state
const initialState = Map({
    twitterInfos: fromJS([]),
    youtubeInfos: fromJS([]),
    instagramInfos: fromJS([]),
});

// reducer
export default handleActions({
    ...pender({
        type: GET_TWITTER_INFO_LIST,
        onSuccess: (state, action) => {
            const { data: twitterInfos, status } = action.payload;
            return state.set('twitterInfos', fromJS(twitterInfos));
        },
        onError: (state, action) => {

        }
    }),

    ...pender({
        type: GET_YOUTUBE_INFO_LIST,
        onSuccess: (state, action) => {
            const { data: youtubeInfos, status } = action.payload;
            return state.set('youtubeInfos', fromJS(youtubeInfos));
        },
        onError: (state, action) => {

        }
    }),
    ...pender({
        type: GET_INSTAGRAM_INFO_LIST,
        onSuccess: (state, action) => {
            const { payload: instagramInfos } = action;
            return state.set('instagramInfos', fromJS(instagramInfos));
        },
        onError: (state, action) => {

        }
    }),
}, initialState)