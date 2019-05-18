import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_MAIN_INFO = 'main/GET_MAIN_INFO';

// action creators
export const getMainInfo = createAction(GET_MAIN_INFO, api.getMainInfo);


// initial state
const initialState = Map({

});

// reducer
export default handleActions({

    ...pender({
        type: GET_MAIN_INFO,
        onSuccess: (state, action) => {
            const { accessToken } = action.payload.data;

            return state.set('login', initialState.get('login'));
        },
        onError: (state, action) => {
            return state.setIn(['login', 'error'], true)
                .setIn(['login', 'password'], '');
        }
    }),
}, initialState)