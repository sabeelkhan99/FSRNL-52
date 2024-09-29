import axios from "axios";

const BACKEND_BASE_URL = 'http://localhost:8080';

export async function fetchProducts() {
    const res = await axios.get(`${BACKEND_BASE_URL}/products`);
    if (res.status != 200) {
        throw new Error('cannot fetch the product the moment');
    }
    return res;
}

export async function fetchProductById(id) {
    const res = await axios.get(`${BACKEND_BASE_URL}/products/${id}`);
    if (res.status != 200) {
        throw new Error('cannot fetch the product the moment');
    }
    return res;
}