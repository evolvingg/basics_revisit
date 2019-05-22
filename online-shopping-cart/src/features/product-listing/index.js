import React from 'react';
import ProductListItem from './product-list-item';
import { connect } from 'react-redux';

function ProductListing(props) {
    return <div className="product-listing">
        {
            props.products.map( (product , index) =>
                <ProductListItem product={product} key={index} addToCart={props.addToCart} cart={props.cart}/>)
        }
    </div>
}

//mapstatetoprops defined so that we kno which keys out of redux store we would be using in our component
function mapStateToProps(state) {
    console.log("cart:",state);
    return {
        cart: state.cart
    }
}

//mapdispatchtoprops adds action creators to props so that it is available in the components
function  mapDispatchToProps(dispatch) {
    return {
        addToCart : (item) => {
            dispatch({type : 'ADD', payload : item})
        },
        removeFromCart : (item) => {
            dispatch({type: 'REMOVE' , payload : item})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)