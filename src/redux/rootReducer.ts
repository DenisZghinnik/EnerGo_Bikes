import {combineReducers} from "redux";
import {authReducer} from "./reducers/authReducer";
import {productsReducer} from "./reducers/productsReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
