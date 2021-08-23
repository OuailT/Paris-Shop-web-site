import { ActionsTypes } from "../Constant/Actions-Types";


export const getProducts = (products) => {
        return {
            type : ActionsTypes.SET_PRODUCTS,
            payload : products,
        }
}


export const SingleProductDetails = (product) => {
    return {
        type : ActionsTypes.PRODUCT_DETAILS,
        payload : product,
    }
}


export const RemoveProductDetails = () => {
    return {
        type : ActionsTypes.REMOVE_PRODUCT,
    }
}