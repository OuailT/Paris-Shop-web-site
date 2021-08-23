import { ActionsTypes} from "../Constant/Actions-Types";

//Reducers take an object of initial state 
// then a function with two params state, payload
// Then we check with switch Case : return 

//Create Initial state 
const initialState = {
    products : [],
};



export const  setProductsReducers = (state = initialState, action) => {
    switch(action.type) {
        case ActionsTypes.SET_PRODUCTS: 
            return {...state, products : action.payload }
        default : 
            return state;
    }
}



export const ProductDetailsReducers = (state={}, action) => {
    switch(action.type) {
        case ActionsTypes.PRODUCT_DETAILS : 
            return {...state, ...action.payload}
        case ActionsTypes.REMOVE_PRODUCT : 
            return {};
        default : 
        return state;
    }

}