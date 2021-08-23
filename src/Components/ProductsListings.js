import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../Redux/Actions/Actions';
import productCard from './ProductCard';
import ProductCard from './ProductCard';




const URL = "https://fakestoreapi.com/products";


const ProductsListings = () => {
    const products = useSelector((state)=> state.allProducts.products);
    const dispatch = useDispatch();
    
    //Get Products From the URL
    useEffect(()=> {
        const fetchProducts = () => {
            axios.get(`${URL}`)
            .then(response => {
                dispatch(getProducts(response.data))
            }).catch((error)=> {
                console.log(`ERROR ${error}`)
            });
        };
        fetchProducts();
    }, [])

    

    return (
        <div className="ui grid container">
          <ProductCard />
        </div>
      );
}

export default ProductsListings



