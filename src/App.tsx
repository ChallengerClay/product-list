import { useState, useEffect } from 'react'
import {getProductsList} from './helpers/getProducts'
import { IProductsList } from './types/interfaces'
import Product from './components/Product'
import Grid from '@mui/material/Grid';
import { Select } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import './App.css'



function App() {
  const [productList, setProductList] = useState<IProductsList>()
  const [col,setCol]=useState(4)
    
    useEffect(() => {
      const handleproducts = async () => {
        const products = await getProductsList();
        setProductList(products);
      };
      handleproducts();
    }, []);
    
    
    const styleList = {
      display:'grid',
      gridTemplateColumns: `repeat(${col}, 1fr)`,
      gap: 10,
      justifyItems: 'center'
    }

  return (
    <div className="App">
          <Select color="primary"
            labelId="Selecciona cantidad de columnas"
            id="select"
            value={col}
            label="Age"
            onChange={e => setCol(Number(e.target.value))}
          >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          </Select >
      <div className="productlist" style={styleList}>
        {productList?.products.map((product) => {
              return <Product key={product.id} products={product}/>
            })}
      </div>
        
    </div>
  )
}

export default App
