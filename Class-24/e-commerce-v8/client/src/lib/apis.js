import axios from "axios";

const BACKEND_BASE_URL = 'https://bazaar-app-server.onrender.com';


export async function fetchProducts() {
    const res = await axios.get(`${BACKEND_BASE_URL}/api/v1/products`, {
        headers: {
            Authorization : `Bearer ${window.localStorage.getItem('token')}`
        }
    });
    if (res.status != 200) {
        throw new Error('cannot fetch the product the moment');
    }
    return res;
}

export async function fetchProductById(id) {
    const res = await axios.get(`${BACKEND_BASE_URL}/api/v1/products/${id}`, {
        headers: {
            Authorization : `Bearer ${window.localStorage.getItem('token')}`
        }
    });
    if (res.status != 200) {
        throw new Error('cannot fetch the product the moment');
    }
    return res;
}

export async function loginUser(userCreds) {
    const res = await axios.post(`${BACKEND_BASE_URL}/api/v1/users/login`, userCreds, {
        headers: {
            Authorization : `Bearer ${window.localStorage.getItem('token')}`
        }
    });
    if (res.status != 200) {
        throw new Error('cannot fetch the product the moment');
    }
    return res;
}

export async function fetchCurrentLoggedInUser() {
    const res = await axios.get(`${BACKEND_BASE_URL}/api/v1/users/profile`, {
        headers: {
            Authorization : `Bearer ${window.localStorage.getItem('token')}`
        }
    });
    if (res.status != 200) {
        throw new Error('cannot fetch the product the moment');
    }
    return res;
}

export async function logoutUser() {
    const res = await axios.post(`${BACKEND_BASE_URL}/api/v1/users/logout`,{}, {
        headers: {
            Authorization : `Bearer ${window.localStorage.getItem('token')}`
        }
    });
    if (res.status != 200) {
        throw new Error('cannot fetch the product the moment');
    }
    return res;
}