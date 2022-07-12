import {
    ADD_TO_CART,
    CLEAR_ERRORS,
    GET_ALL_PRODUCTS_FAIL,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    REMOVE_FROM_CART
} from "./constants";

export const allProductReducer = (state = { allProducts: [] }, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                allProducts: action.payload
            }
        case GET_ALL_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }

}

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = action.payload
            const isItemExist = state.cartItems.find((item) => item.id === newItem.id)
            if (isItemExist) {
                return {
                    ...state,
                    message: "item already exist !",
                    cartItems: state.cartItems.map((item) => {
                        if (item.id === isItemExist.id) {
                            item.quantity += newItem.quantity
                            return item
                        } else {
                            return item
                        }
                    }),
                }
            } else {
                return {
                    ...state,
                    message: "item added successfully !",
                    cartItems: [...state.cartItems, newItem],
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                message: "item removed !",
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.id)
            }


        default:
            return state;
    }
}