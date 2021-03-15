import {buildAction, InferActionTypes} from "../../types/types";
import {AnyAction} from "redux";
import {Dispatch} from "react";
import {authApi, ResultsCodes} from "../../api/api";
import {products} from "./products";


export const ACTION_TYPE = 'app//ACTION_TYPE';
export type item = {
    img: string,
    name: string,
    stars: number,
    discount: boolean,
    price: string,
    discountPrice: string,
    link: string
}

export type productsReducerState = {
    productsList: item[]
};

const initialState = {
    productsList: products
};

export const productsReducer = (state = initialState, action: ProductsReducerActions): productsReducerState => {
    switch (action.type) {
        case ACTION_TYPE:
            return {...state};
        default:
            return state;
    }
};

export const productsReducerActions = {
    action: () => buildAction(ACTION_TYPE),
};

export type ProductsReducerActions = ReturnType<InferActionTypes<typeof productsReducerActions>>

export const getProducts = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const resData = await authApi.getAuth();
        if (resData.resultCode === ResultsCodes.Success) {
            dispatch(productsReducerActions.action());
        }
    } catch (error) {
        console.log(error)
    }
};