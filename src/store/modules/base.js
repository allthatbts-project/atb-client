import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';
const LOGIN = 'base/LOGIN';
const CHANGE_INPUT = 'base/CHANGE_INPUT';
const INITIALIZE_LOGIN = 'base/INITIALIZE_LOGIN';
const TEMP_LOGIN = 'base/TEMP_LOGIN';

// action creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const login = createAction(LOGIN, api.login);
export const changeInput = createAction(CHANGE_INPUT);
export const initializeLogin = createAction(INITIALIZE_LOGIN);
export const tempLogin = createAction(TEMP_LOGIN);

// initial state
const initialState = Map({
    modal: Map({
        remove: false,
        login: false
    }),
    login: Map({
        usernameOrEmail: '',
        password: '',
        error: false
    }),
    signUp: Map({
        username: '',
        email: '',
        password: '',
    }),
});

// reducer
export default handleActions({
    [SHOW_MODAL]: (state, action) => {
        const { payload: modalName } = action;
        return state.setIn(['modal', modalName], true);
    },
    [HIDE_MODAL]: (state, action) => {
        const { payload: modalName } = action;
        return state.setIn(['modal', modalName], false);
    },
    ...pender({
        type: LOGIN,
        onSuccess: (state, action) => {
            const { accessToken } = action.payload.data;
            localStorage.setItem("accessToken", accessToken);
            localStorage.logged=true;
            return state.set('login', initialState.get('login'));
        },
        onError: (state, action) => {
            return state.setIn(['login', 'error'], true)
                .setIn(['login', 'password'], '');
        }
    }),
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['login', name], value);
    },
    [INITIALIZE_LOGIN]: (state, action) => {
        return state.set('loginModal', initialState.get('loginModal'));
    },
    [TEMP_LOGIN]: (state, action) => {
        return state.set('logged', true);
    },
}, initialState)