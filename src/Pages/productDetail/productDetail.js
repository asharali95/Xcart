import React,{ useEffect, useState } from 'react'
import { connect } from 'react-redux';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { fetchSpecificProductForDisplay } from './../../Redux/product/productActions';

const ProductDetail = ({match: {params: { productId }},fetchSpecificProductForDisplay}) => {
   var [product, setProduct] = useState({})
    useEffect(async() => {
    var productData = await fetchSpecificProductForDisplay(productId)
    setProduct(productData)
   },[])


    return (
        <div>
            <h1>product detail page</h1>
            {product.title && <ProductCard key={product.title} {...product}/>}
        </div>
    )
}
var actions = {
    fetchSpecificProductForDisplay,
}
export default connect(null, actions)(ProductDetail)
