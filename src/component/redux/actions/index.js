export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

export const delItem = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

export const decItem = (product) => {
    return {
        type: "DEC_ITEM",
        payload: product
    }
}
// actions.js

export const setCartItems = (cartItems) => {
    return {
        type: 'SET_CART_ITEMS',
        payload: cartItems,
    };
};
