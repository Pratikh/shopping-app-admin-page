import axios from "axios";

import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
    maxAge: 15 * 60 * 1000
})

const api = axios.create({
    adapter: cache.adapter,
    baseURL: 'https://fakestoreapi.com'
})

const getProduct = (limit = 5) => {
    const promise = api.get('/products')
        .then(res => res)
        .catch(function (error) {
            return error.response;
        });
    return promise;
}

const deletProduct = (id) => {
    const promise = api.get('/products/' + id)
        .then(res => res)
        .catch(function (error) {
            return error.response;
        });
    return promise;
}

const updateProductDetails = (payload) => {
    const promise = api.patch('/products/' + payload.id, payload)
        .then(res => res)
        .catch(function (error) {
            return error.response;
        });
    return promise;
}

export { getProduct, deletProduct, updateProductDetails };