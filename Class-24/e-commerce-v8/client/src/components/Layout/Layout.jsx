import React, {Fragment} from 'react'
import Navbar from '../Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
  
    return (
        <Fragment>
            <header>
                <Navbar/>
            </header>
            <main>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                    theme="light"
                />
                {props.children}
            </main>
            <footer></footer>
    </Fragment>
  )
}

export default Layout