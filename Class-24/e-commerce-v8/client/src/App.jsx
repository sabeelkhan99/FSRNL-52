import './App.css';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import Login from './pages/Login';
import Register from './pages/Register';
import ShowProduct from './pages/ShowProduct';
import Cart from './pages/Cart';

function App() {

  return <Layout>
    <Routes>
      <Route path='/' element={<AllProducts />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/products/:id' element={ <ShowProduct/>} />
      <Route path='/cart' element={ <Cart/>} />
    </Routes>
  </Layout>
}

export default App;
