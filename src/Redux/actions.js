import axios from "axios"
import {
    ADD_TO_CART,
    ADD_TO_CART_FAIL,
    BASE_URL,
    GET_ALL_PRODUCTS_FAIL,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    REMOVE_FROM_CART
} from "./constants"

const API = axios.create({ baseURL: BASE_URL })

export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_PRODUCTS_REQUEST })

        const { data } = await API.get("")

        dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_ALL_PRODUCTS_FAIL, payload: error })

    }
}

export const addToCart = (data, quantity) => (dispatch) => {
    try {
        const productData = {
            id: data.id,
            title: data.title,
            type: data.type,
            filename: data.filename,
            rating: data.rating,
            description: data.description,
            price: data.price,
            quantity

        }
        dispatch({ type: ADD_TO_CART, payload: productData })


    } catch (error) {
        dispatch({ type: ADD_TO_CART_FAIL, payload: error })

    }
}
export const removeFromCart = (product) => (dispatch) => {
    try {
        dispatch({ type: REMOVE_FROM_CART, payload: product })

    } catch (error) {
        dispatch({ type: "REMOVE_FROM_CART_FAIL", payload: error })
    }
}