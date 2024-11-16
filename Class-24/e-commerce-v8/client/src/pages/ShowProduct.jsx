import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { useParams } from 'react-router-dom';
import useHttp from '../hooks/useHttp';
import { fetchProductById } from '../lib/apis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CartContext from '../store/cart-context';

const ShowProduct = () => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const { sendRequest, data: product, error, status } = useHttp(fetchProductById, true);

    useEffect(() => {
        sendRequest(id);
    }, []);


    if (status == 'pending') {
        return <p>Loading.......</p>
    }

    if (status == 'completed' && error != null) {
        if (error.status == 401) {
            toast.error(error?.response?.data?.message);
            navigate('/login');
        }
        return <p>{error?.response?.data?.message}</p>
    }

    const addToCartHandler = () => {
        addToCart({ title: product.title, price: product.price, qty: 1 });
    }

    return (
        <Box>
            <Grid container spacing={2}>
                    <Grid size={6}>
                    <Card sx={{ maxWidth: 345, height:380 }}>
                        <CardMedia
                            component="img"
                            sx={{ height: 160 }}
                            image={product.image}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {product.title.substring(0, 15)}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                            Rs. {product.price}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {product.description.substring(0,100)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={addToCartHandler} size="small">Add to Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid size={6}>
                            <Typography>Add a review</Typography>
                    </Grid>
            </Grid>
        </Box>
    )
}

export default ShowProduct