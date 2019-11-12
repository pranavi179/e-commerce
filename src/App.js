import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import "antd/dist/antd.css";


import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import View from './components/view'



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} /> 
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component = {Default} />
      </Switch>
      <ProductList />
      <Details />
      <Cart />
      <Default />
      <View />
    </React.Fragment>
  );
}

export default App;
