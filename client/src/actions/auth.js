import axios from 'axios';
import { setAlert } from './alert'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT

} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load user
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err){
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Register user 
export const register = ({firstName, lastName, username, emailAddress, password, prefernces}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({firstName, lastName, username, emailAddress, password, prefernces});

    try{
        const res = await axios.post('api/auth', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (err){

        const errors = err.response.data.errors;

        // if(errors){
        //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        // }

        dispatch({
            type: REGISTER_FAIL
        });
    }
}

// Login user 
export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({username, password});

    try{
        const res = await axios.post('api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (err){

        const errors = err.response.data.errors;

        // if(errors){
        //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        // }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// Logout 
export const logout = () => dispatch =>{
    dispatch({type: LOGOUT});
};