import React from 'react';

export default function ProductListing(props) {
    return <div>
        {
            props.products.map( product =>
                <ProductListItem product={product}/>)
        }
    </div>
}