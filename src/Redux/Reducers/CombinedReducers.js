import { combineReducers } from "redux";
import { setProductsReducers, ProductDetailsReducers } from "./ProductsReducers";


export const reducers = combineReducers({
    allProducts : setProductsReducers,
    product : ProductDetailsReducers,
});