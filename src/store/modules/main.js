import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_UTUBE_INFO_LIST = 'main/GET_UTUBE_INFO_LIST';
const GET_INSTAGRAM_INFO_LIST = 'main/GET_INSTAGRAM_INFO_LIST';

// action creators
export const getUtubeInfoList = createAction(GET_UTUBE_INFO_LIST, api.getUtubeInfoList);
export const getinstagramInfoList = createAction(GET_INSTAGRAM_INFO_LIST, api.getInstagramInfoList);
// initial state
const initialState = Map({
    utubeInfos: fromJS([]),
    instagramInfos: fromJS([]),
});

// reducer
export default handleActions({

    ...pender({
        type: GET_UTUBE_INFO_LIST,
        onSuccess: (state, action) => {
            const { payload: utubeInfos } = action;
            return state.set('utubeInfos', utubeInfos);
        },
        onError: (state, action) => {

        }
    }),
    ...pender({
        type: GET_INSTAGRAM_INFO_LIST,
        onSuccess: (state, action) => {
            const { payload: instagramInfos } = action;
            return state.set('instagramInfos', instagramInfos);
        },
        onError: (state, action) => {

        }
    }),
}, initialState)