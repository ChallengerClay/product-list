import { useState, useEffect } from 'react'
import {getProductsList} from './helpers/getProducts'
import { IProductsList } from './types/interfaces'
import Product from './components/Product'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Select } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import './App.css'



function App() {
  const [productList, setProductList] = useState<IProductsList>()
  const [col,setCol]=useState(4)
  const [page,setPage]= useState(1)
  //const [loading, setLoading] = useState(false)
    
    useEffect(() => {
      const handleproducts = async () => {
        const products = await getProductsList(page);
        setProductList(products);
      };
      handleproducts();
    }, [page]);

    
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
      <Stack spacing={2}>
        <Pagination count={(productList?.total/productList?.limit)} showFirstButton showLastButton onChange={e => setPage(Number(e.target.innerText))}/>
      </Stack>
    </div>
  )
}

export default App
