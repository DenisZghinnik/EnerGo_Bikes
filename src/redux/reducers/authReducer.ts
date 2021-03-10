import {buildAction, InferActionTypes} from "../../types/types";
import {AnyAction, Dispatch} from "redux";
import {authApi, ResultsCodes} from "../../api/api";

export const SET_AUTH = 'app/authReducer/SET_AUTH';
export const LOGIN_REQUEST = 'app/authReducer/LOGIN_REQUEST';
export const LOGIN_FAIL = 'app/authReducer/LOGIN_FAIL';
export const CLEAR_LOGIN_FAILED = 'app/authReducer/CLEAR_LOGIN_FAILED';

export type AuthReducerState = {
    isFetching:boolean,
    isAuthorized: boolean,
    isLoginFailed: boolean,
    captchaUrl: string,
};

const initialState = {
    isFetching: false,
    isAuthorized: false,
    isLoginFailed: false,
    captchaUrl: '',
};

export const authReducer = (state = initialState, action: AuthReducerActions): AuthReducerState => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, isFetching: true};
        case LOGIN_FAIL:
            return {...state, isFetching: false, isLoginFailed: true};
        case CLEAR_LOGIN_FAILED:
            return {...state, isLoginFailed: false};
        case SET_AUTH:
            return {...state, isAuthorized: action.payload, isFetching: false};
        default:
            return state;
    }
};

export const authReducerActions = {
    loginRequest: () => buildAction(LOGIN_REQUEST),
    loginFail: () => buildAction(LOGIN_FAIL),
    clearIsLoginFailed: () => buildAction(CLEAR_LOGIN_FAILED),
    setAuth: (isAuthorized:boolean) => buildAction(SET_AUTH, isAuthorized),
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
    dispatch(authReducerActions.loginRequest())
    try {
        const resData = await authApi.login(mail, password);
        if (resData.resultCode === ResultsCodes.Success) {
            dispatch(authReducerActions.setAuth(true));
        } else {
            dispatch(authReducerActions.loginFail());
        }
    } catch (error) {
        console.log(error)
    }
};