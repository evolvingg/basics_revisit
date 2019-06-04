const cartWithoutItem = (cart,item) => cart.filter(cartItem => cartItem.id !==item.id );

const itemInCart = (cart,item) => cart.filter(cartItem => cartItem.id===item.id)[0];

const addToCart = (cart,item) => {
    console.log('item in add::',item , cart);
    const cartItem = itemInCart(cart,item);
    return cartItem === undefined ? [...cartWithoutItem(cart , item), {...item,quantity:1}] : [...cartWithoutItem(cart,item), {...cartItem , quantity:cartItem.quantity + 1}];
}

const removeFromCart = (cart,item) => {
    return item.quantity === 1 ? [...cartWithoutItem(cart,item)] : [...cartWithoutItem(cart,item) , {...item,quantity: item.quantity-1}]
}

export const cartReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD':
            console.log("action in redu:",action.type,action.payload)
            return addToCart(state,action.payload);
        case 'REMOVE':
            // const firstMatch = state.indexOf(action.payload)
            // return state.filter((item,index) => index!==firstMatch);
            return removeFromCart(state,action.payload);
        default:
            console.log('default::',state);
            return state;
    }
    return state;
}


