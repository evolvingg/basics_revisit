import React from 'react';
import ProductListItem from './product-list-item';
import { connect } from 'react-redux';
import { cartItemsWithQuantities } from '../cart';
import { bindActionCreators } from "redux";


function ProductListing(props) {
    return <div className="product-listing">
        {
            props.products.map((product , index) => {
                // <ProductListItem product={product} key={index} addToCart={props.addToCart} cart={props.cart}/>)
                // <ProductListItem product={product} key={index} addToCart={props.addToCart} cart={cartItemsWithQuantities(props.cart)}/>)

                console.log('proudtc:: props.cart ',product , props);
                return (
                <ProductListItem 
                    product={product} 
                    key={index} 
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart} 
                    cartItem={props.cart.filter( cartItem => cartItem.id === product.id)[0]}
                   />)
            }
                )
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
function  mapDispatchToProps(dispatch ,ownProps ) {
    console.log('in mapdispatchtoprops::',ownProps );
    return {
        addToCart : (item) => {
            console.log('ín action:',item);
            dispatch({type : 'ADD', valu:5 , payload:item})
        },
        removeFromCart : (item) => {
            dispatch({type: 'REMOVE' , payload : item})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)