import React from 'react'
import {
    authTypes
} from '../types';
import axiosClient from '../config/axios'


export const loginAction = async datos => {
    return (dispatch) => {
        dispatch( login() )
        try {
            const respuesta = await axiosClient.post('/api/auth', datos);
            dispatch( loginSuccess() ) ;   
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch( loginFailure() );   
        }
    }
}

const login = () => ({
    type: authTypes.LOGIN,
    payload: true,
});

const loginSuccess = (payload) => ({
    type: authTypes.LOGIN_SUCCESS,
    payload: payload
});

const loginFailure = (errorState) => ({
    type: LOGIN_ERROR,
    payload: errorState
});


export const logoutAction = () => {
    dispatch( logout() );
}

const logout = () => ({
    type: CERRAR_SESION
});
