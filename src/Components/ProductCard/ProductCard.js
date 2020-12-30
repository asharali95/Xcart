import React from 'react'

const ProductCard = ({title, cost}) => {
    return (
        <div>
            <h4>{title} - {`$${cost}`} - <button>Add to cart</button></h4>
        </div>
    )
}

export default ProductCard
