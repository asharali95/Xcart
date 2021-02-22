import React, { useEffect } from "react";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import { connect } from "react-redux";
import { categorizedProduct } from "../../Utility/Utility-Products/Utility-Products";
import { fetchProducts } from "../../Redux/product/productActions";
import "./CategoryList.css"
const CategoryList = ({ fetchProducts, categories }) => {
//   console.log(categories);
  useEffect(() => {
    //CDM
    fetchProducts();
    // console.log("CDM")
  }, []);
  return (
    <div className="category_list">
      {/* <h1>category list</h1> */}
      {categories.map((category) => <CategoryListItem key={category.category} {...category} />)}
    </div>
  );
};

var mapState = (state) => ({
  categories: categorizedProduct(state.products),
});

var actions = {
  fetchProducts,
};
export default connect(mapState, actions)(CategoryList);
