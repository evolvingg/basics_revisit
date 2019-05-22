export const cartReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD':
            return [...state,action.payload];
        case 'REMOVE':
            const firstMatch = state.indexOf(action.payload)
            return state.filter((item,index) => index!==firstMatch);
    }
    return state;
}
