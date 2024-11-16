import React, {Fragment, useContext} from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartContext from '../store/cart-context';

function Cart() {

    const { cart } = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => total+item.qty*item.price , 0);

    return <Fragment>
            <Grid maxWidth="md" sx={{margin:'10px auto'}} spacing={2}>
                <Grid size={6} >
                {
                        cart.map((item) => {
                            return <Grid size={12}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                        </Typography>
                                        <Typography>$ { item.price }</Typography>
                                        <Typography>Quantity: { item.qty }</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">+</Button>
                                        <Button size="small">-</Button>
                                    </CardActions>
                                </Card>
                        </Grid>
                    
                    })
                }
            </Grid>
            <Grid size={6}>
                <Typography>Total Price : {totalPrice}</Typography>
                <Button size="small" color='primary'>Checkout</Button>
            </Grid>
        </Grid>
    </Fragment>

}


export default Cart;