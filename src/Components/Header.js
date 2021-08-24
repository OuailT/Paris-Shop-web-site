import React from "react";
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector, useDispatch} from "react-redux";


const Header = () => {
    const cardProducts = useSelector((state)=> state.addToCardProducts);
    const dispatch = useDispatch();

  return (
      <header>
        <Link to ="/">
          <h2>Paris Store</h2>
        </Link>
          <div className="shopping-card">
            <FiShoppingCart className="basket-shop"/>
            <div className="circle-card" >{cardProducts}</div>
          </div>
      </header>
  );
};

export default Header;
