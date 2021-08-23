
import './App.css';
import Header from './Components/Header';
import ProductsListings from './Components/ProductsListings'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';


function App() {
  
  return (
    <>
    <Router>
      <Route>
         <Header/>
      </Route>
       <Switch>
          <Route path="/" exact component={ProductsListings}/>
          <Route path="/product/:productId" component={ProductDetails}/>
          <Route>404 Not Found</Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
