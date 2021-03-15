import {RootState} from "../redux/rootReducer";

export const getIsAuthorized = (state:RootState) => state.auth.isAuthorized;
export const getIsLoginFetching = (state:RootState) => state.auth.isFetching;
export const getIsLoginFailed = (state:RootState) => state.auth.isLoginFailed;
export const getIsResetSent = (state:RootState) => state.auth.resetLinkSent;
export const getAuthErrorMessage = (state:RootState) => state.auth.errorMessage;


export const getProductsList = (state:RootState) => state.products.productsList;

