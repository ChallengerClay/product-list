import React from 'react'
import {IProduct} from '../types/interfaces'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type ProductProps = { 
    products: IProduct;
  }

export const Product = ({products}: ProductProps) => {
    const { title, description,thumbnail } = products;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Product
