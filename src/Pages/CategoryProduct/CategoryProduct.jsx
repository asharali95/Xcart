import React,{useEffect} from "react";
import { connect } from 'react-redux';
import ProductCard from "../../Components/ProductCard/ProductCard";
import { fetchCategoryProducts,clearProducts } from './../../Redux/product/productActions';
import "./CategoryProduct.css"
import Header from './../../Components/Header/Header';
const CategoryProduct = ({match: {params: { category }},fetchCategoryProducts,clearProducts, products}) => {
    useEffect(() => {
        //CDM
        fetchCategoryProducts(category)
      return() =>{
        //CWU
        clearProducts()
      }
    }, [])
    return (
    <div className="category-product">
       {/* <h1>{category} Product Page</h1> */}
       <div className="category_list">
       <div className="category_list_item">
       <div className="category_text"><Header fontSize={120} fontWeight="bold">{category}</Header></div>
       {products.map(product =><ProductCard key={product.title} {...product}/>)}
       </div>
       </div>
      </div>
  );
};
var actions = {
    fetchCategoryProducts,
    clearProducts
}
var mapState = (state) =>({
    products: state.products,
})
    
export default connect(mapState, actions)(CategoryProduct);
