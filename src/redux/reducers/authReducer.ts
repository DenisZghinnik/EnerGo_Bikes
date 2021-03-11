import {buildAction, InferActionTypes} from "../../types/types";
import {AnyAction, Dispatch} from "redux";
import {authApi, ResultsCodes} from "../../api/api";

export const SET_AUTH = 'app/authReducer/SET_AUTH';
export const REQUEST = 'app/authReducer/REQUEST';
export const LOGIN_FAIL = 'app/authReducer/LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'app/authReducer/LOGOUT_SUCCESS';
export const RESET_LINK_SENT = 'app/authReducer/RESET_LINK_SENT';
export const CLEAR_MESSAGES = 'app/authReducer/CLEAR_MESSAGES';
export const SET_ERROR_MESSAGES = 'app/authReducer/SET_ERROR_MESSAGES';

export type AuthReducerState = {
    isFetching:boolean,
    isAuthorized: boolean,
    isLoginFailed: boolean,
    captchaUrl: string,
    resetLinkSent: boolean,
    errorMessage: string
};

const initialState = {
    isFetching: false,
    isAuthorized: false,
    isLoginFailed: false,
    captchaUrl: '',
    resetLinkSent: false,
    errorMessage: ''
};

export const authReducer = (state = initialState, action: AuthReducerActions): AuthReducerState => {
    switch (action.type) {
        case REQUEST:
            return {...state, isFetching: true};
        case LOGIN_FAIL:
            return {...state, isFetching: false, isLoginFailed: true};
        case CLEAR_MESSAGES:
            return {...state, isLoginFailed: false, resetLinkSent: false, errorMessage:''};
        case LOGOUT_SUCCESS:
            return {...state, isAuthorized: false};
        case SET_AUTH:
            return {...state, isAuthorized: action.payload, isFetching: false};
        case RESET_LINK_SENT:
            return {...state, resetLinkSent: true, isFetching: false,};
        case SET_ERROR_MESSAGES:
            return {...state, errorMessage: action.payload, isFetching: false};
        default:
            return state;
    }
};

export const authReducerActions = {
    request: () => buildAction(REQUEST),
    loginFail: () => buildAction(LOGIN_FAIL),
    clearMessages: () => buildAction(CLEAR_MESSAGES),
    setAuth: (isAuthorized:boolean) => buildAction(SET_AUTH, isAuthorized),
    logoutSuccess: () => buildAction(LOGOUT_SUCCESS),
    resetLinkSent: () => buildAction(RESET_LINK_SENT),
    setErrorMessage: (message:string) => buildAction(SET_ERROR_MESSAGES, message),
};
export type AuthReducerActions = ReturnType<InferActionTypes<typeof authReducerActions>>

export const getAuth = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const resData = await authApi.getAuth();
        if (resData.resultCode === ResultsCodes.Success) {
            dispatch(authReducerActions.setAuth(true));
        }
    } catch (error) {
        console.log(error)
    }
};

export const loginRequest = (mail:string, password:string) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(authReducerActions.request())
    try {
        const resData = await authApi.login(mail, password);
        console.log()
        if (resData.resultCode === ResultsCodes.Success) {
            dispatch(authReducerActions.setAuth(true));
        } else {
            dispatch(authReducerActions.loginFail());
        }
    } catch (error) {
        console.log(error)
    }
};

export const logoutRequest = () => async (dispatch: Dispatch<AnyAction>) =>{
        const resData = await authApi.logout();
        resData.resultCode === ResultsCodes.Success
            ? dispatch(authReducerActions.logoutSuccess())
            : console.log(resData.messages);
};

export const passwordResetRequest = (email:string) => async (dispatch: Dispatch<AnyAction>)=>{
     dispatch(authReducerActions.request())
    const resData = await authApi.resetPassword(email);
        resData.resultCode === ResultsCodes.Success
            ? dispatch(authReducerActions.resetLinkSent())
            : console.log(resData.messages);
}

export const registerRequest = (mail:string, password:string) => async (dispatch: Dispatch<AnyAction>)=>{
    dispatch(authReducerActions.request());
    try {
        const resData = await authApi.register(mail, password);
        if (resData.resultCode === ResultsCodes.Success) {
            dispatch(authReducerActions.setAuth(true));
        } else {
            dispatch(authReducerActions.setErrorMessage(resData.message));
        }
    } catch (error) {
        console.log(error)
    }
}