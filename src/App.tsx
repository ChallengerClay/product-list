import { useState, useEffect } from 'react'
import {getProductsList} from './helpers/getProducts'
import { IProductsList } from './types/interfaces'
import Product from './components/Product'
import './App.css'



function App() {
  const [productList, setProductList] = useState<IProductsList>()
    useEffect(() => {
      const handlePokemons = async () => {
        const products = await getProductsList();
        setProductList(products);
      };
      handlePokemons();
    }, []);
  return (
    <div className="App">
      {productList?.products.map((product) => {
            return <Product key={product.id} products={product}/>
          })}
    </div>
  )
}

export default App
