import React from 'react';
import AddButton from './add-btn';
import RemoveButton from './remove-btn';

export default function ProductListItem(props) {
   // const num=props.cart.reduce((sum,item) => {if(item.id===props.product.id){++sum}return sum},0);
  //  console.log(num,props.cart);
  //  const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0];
  //  console.log('this item::',thisItemInCart);
  console.log('...............',props)
    return <div className="product-list-item">
            <h3>{props.product.name}</h3>
            <img height={100} title={props.product.name} src={`/products/${props.product.image}`}/>
            <div>{props.product.description}</div>
            <div>${props.product.price}</div>
            <div>
                {/* writing on click in an arrow function so that it is fired when we click on it
                <button onClick={() => props.addToCart(props.product)}>Add to cart({
                  props.cart && num 
                })</button> */}
                  <div>
                    <AddButton 
                    cartItem={props.cartItem} 
                    product={props.product} 
                    addToCart={props.addToCart}/>
                  </div>
                  {props.cartItem ? 
                    (
                    <div>
                      <RemoveButton 
                      cartItem={props.cartItem} 
                      product={props.product} 
                      removeFromCart={props.removeFromCart}/>
                    </div>
                    ) : 
                    null}
            </div>
        </div>        
}