import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom';
import "../CategoryListItem/CategoryListItem.css"
import Header from './../Header/Header';
const CategoryListItem = ({category,products}) => {
    return (
        <div className="category_list_item">
            <h1 className="category_text"><Link to={`/category-products/${category}`}>{category}</Link></h1>
            {products.map((product) =><ProductCard key={product.title} {...product} />)}
            
        </div>
    )
}

export default CategoryListItem
