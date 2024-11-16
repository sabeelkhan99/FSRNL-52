import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid2';
import Product from '../Product/Product';
import Container from '@mui/material/Container';

const ProductList = ({products}) => {
    return (
        <Container sx={{mt:5}}>
            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    products.map((product) => {
                        return <Grid key={product._id}>
                            <Product
                                id={product._id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                            />
                    </Grid>
                    })
                }
            </Grid>
      </Container>
    )
}

export default ProductList;