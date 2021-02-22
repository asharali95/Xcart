import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom';
import "../CategoryListItem/CategoryListItem.css"
import Header from './../Header/Header';
const CategoryListItem = ({category,products}) => {
    return (
        <div className="category_list_item">
            <div className="category_text"><Link to={`/category-products/${category}`}><Header fontSize={120} fontWeight="bold">{category}</Header></Link></div>
            {products.map((product) =><ProductCard key={product.title} {...product} />)}
            
        </div>
    )
}

export default CategoryListItem
