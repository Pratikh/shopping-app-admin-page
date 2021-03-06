import { createStore } from "redux";

// createStore


const initialState = {
    products: [],
    currentEditableProduct: null,
}

// action type constants

const LOAD_PRODUCT = 'LOAD_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';


// actions

const loadProductsActions = (payload) => {
    return {
        type: LOAD_PRODUCT,
        payload,
    }
}

const updateProductAction = (payload) => {
    return {
        type: UPDATE_PRODUCT,
        payload
    }
}

const deleteProductAction = (payload) => {
    return {
        type: DELETE_PRODUCT,
        payload
    }
}

const addNewProduct = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload,
    }
}



export { loadProductsActions, updateProductAction, deleteProductAction, addNewProduct }
// Reducer 

const updateProduct = (products, payload) => {
    const copyData = [...products];
    copyData.forEach((list, index) => {
        if (list.id === payload.id) {
            copyData[index] = payload;
        }
    })
    return copyData;
}

const checkAndAddData = (list, payload) => {
    // This code is written to avoid duplicate data with same id 
    const mergeData = [...list, ...payload];
    const data = [...new Map(mergeData.map(item =>
        [+item.id, item])).values()];
    return data;
}


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PRODUCT:
            return {
                ...state,
                products: checkAndAddData(state.products, payload)
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: updateProduct(state.products, payload),
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(list => list.id !== payload)
            }

        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, payload]
            }

        default:
            return state;
    }
}

export default createStore(reducer, initialState);