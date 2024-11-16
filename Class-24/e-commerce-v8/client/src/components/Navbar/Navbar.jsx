import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material';
import UserContext from '../../store/user-context';
import Badge from '@mui/material/Badge';
import CartContext from '../../store/cart-context';

function Navbar() {

  const { isLoggedIn, logout } = useContext(UserContext);
  const { cartLength } = useContext(CartContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={NavLink} to="/" color="inherit" sx={{ flexGrow: 1, textDecoration:'none' }}>
            Bazaar
          </Typography>
          {!isLoggedIn && <Button color="inherit" component={NavLink} to="/login">Login</Button>}
          {!isLoggedIn && <Button color="inherit" component={NavLink} to="/register">SignUp</Button>}
          {isLoggedIn && <Badge badgeContent={cartLength==0 ? '0': cartLength} color="secondary">
            <Button color="inherit" component={NavLink} to="/cart">Cart</Button>
          </Badge>}
          {isLoggedIn && <Button color="inherit" onClick={()=>logout()}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
