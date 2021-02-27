import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import {
  fetchCategoryProducts,
  clearProducts,
} from "./../../Redux/product/productActions";
import "./CategoryProduct.css";
import Header from "./../../Components/Header/Header";

const CategoryProduct = ({
  match: {
    params: { category },
  },
  fetchCategoryProducts,
  clearProducts,
  products,
}) => {
  useEffect(() => {
    //CDM
    fetchCategoryProducts(category);
    return () => {
      //CWU
      clearProducts();
    };
  }, []);
  return (
    <div className="category-product">
      <div className="category-product-list">
       <h1 className="category_text category_text_n">{category}</h1>
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
};
var actions = {
  fetchCategoryProducts,
  clearProducts,
};
var mapState = (state) => ({
  products: state.products,
});

export default connect(mapState, actions)(CategoryProduct);
