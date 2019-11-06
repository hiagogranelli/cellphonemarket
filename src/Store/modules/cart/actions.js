export function addToCart(product) {
    return {
        type: '@cart/ADD',
        product,
    };
}

export function removeFromCart(id) {
    return { 
        type: '@cart/REMOVE',
        id,
    };
}

export function updateAmmount(id, ammount) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        id, 
        ammount,
    };
} 