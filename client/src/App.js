import './App.css';
import AllProducts from './components/AllProducts';
import ProductForm from './components/ProductForm';
import OneProduct from './components/OneProduct';
import { useState } from 'react';
import {Router} from '@reach/router';

const initialProduct = {
  title: '',
  price: '',
  desc: ''
}

function App() {
  const [product, setProduct] = useState(initialProduct)



  return (
    <div className="App">
        {/* <AllProducts /> */}
      <Router>
        <ProductForm initialProduct={initialProduct} product={product} setProduct={setProduct} path="/"/>
        <OneProduct path="/:id" />
      </Router>
    </div>
  );
}

export default App;
