import { React, useEffect } from "react";
import { fetchProducts } from "../../Redux/product/productActions";
import { connect } from "react-redux";
import { categorizedProduct } from "../../Utility/Utility-Products/Utility-Products";

const Category = ({ fetchProducts, categories }) => {
  console.log(categories);
  useEffect(() => {
    //CDM
    fetchProducts();
    // console.log("CDM")
  }, []);
  return (
    <div>
      <h1>category Page</h1>
    </div>
  );
};
var mapState = (state) => ({
  categories: categorizedProduct(state.products),
});

var actions = {
  fetchProducts,
};
export default connect(mapState, actions)(Category);
