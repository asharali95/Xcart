import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom';

const CategoryListItem = ({category,products}) => {
    return (
        <div>
            <h3>{category}</h3>
            {products.map((product) =><ProductCard key={product.title} {...product} />)}
            <Link to={`/category-products/${category}`}><button>view more</button></Link> <br/>
            ----------------------------------
            
        </div>
    )
}

export default CategoryListItem
