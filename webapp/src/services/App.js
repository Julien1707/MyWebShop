import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/api';

export const fetchProducts = async (page = 1, perPage = 10) => {
    const response = await axios.get(`${API_BASE_URL}/products`, {
        params: { page, per_page: perPage },
    });
    return response.data;
};

export const fetchProductByName = async (productName) => {
    const response = await axios.get(`${API_BASE_URL}/products/${productName}`);
    return response.data;
};
