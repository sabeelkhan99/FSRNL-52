import React, { Fragment, useEffect } from 'react'
import ProductList from '../components/ProductList/ProductList'
import Banner from '../components/Banner/Banner';
import useHttp from '../hooks/useHttp';
import { fetchProducts } from '../lib/apis';

const AllProducts = () => {

  const { sendRequest, data: products, error, status } = useHttp(fetchProducts, true);
  
  useEffect(() => {
    sendRequest();
  }, []);
  
  if (status == 'pending') {
    return <p>Loading.....</p>
  }

  if (status == 'completed' && error!=null) {
    // return <p>{ error }</p>
  }

  return (
    <Fragment>
          <Banner/>
          <ProductList products={ products} />
    </Fragment>
  )
}

export default AllProducts;