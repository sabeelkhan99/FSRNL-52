import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Product(props) {
  return (
    <Card sx={{ maxWidth: 345, height:380 }}>
      <CardMedia
        component="img"
        sx={{ height: 160 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title.substring(0, 15)}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Rs. {props.price}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.description.substring(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/products/${props.id}`}>Show</Button>
      </CardActions>
    </Card>
  );
}

export default Product;
