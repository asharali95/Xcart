import React,{useEffect} from "react";
import { connect } from 'react-redux';
import ProductCard from "../../Components/ProductCard/ProductCard";
import { fetchCategoryProducts,clearProducts } from './../../Redux/product/productActions';

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
    <div>
      <h1>{category} Product Page</h1>
      {products.map(product =><ProductCard key={product.title} {...product}/>)}
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
