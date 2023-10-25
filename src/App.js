import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductDesc from './components/ProductDesc/ProductDesc';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

export const productsContext = createContext(null)

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    instance.get('/products')
    .then(products => setProducts(products.data));
  }, [])


  return (
    <div className="App">
      <productsContext.Provider value={products}>
        <ProductDesc />
      </productsContext.Provider>
    </div>
  );
}

export default App;
