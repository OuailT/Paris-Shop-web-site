import { combineReducers } from "redux";
import { setProductsReducers, ProductDetailsReducers, AddToCardReducers } from "./ProductsReducers";

export const reducers = combineReducers({
    allProducts : setProductsReducers,
    product : ProductDetailsReducers,
    addToCardProducts : AddToCardReducers,
});