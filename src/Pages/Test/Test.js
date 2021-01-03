import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadProduct } from "./../../Redux/product/productActions";
import Cart from './../../Components/Cart/Cart';

const Test = ({ uploadProduct }) => {
  var [category, setCategory] = useState("");
  var [title, setTitle] = useState("");
  var [cost, setCost] = useState("");
  var [description, setDescription] = useState("");
  var [quantity, setQuantity] = useState("");
  var [coverPhoto, setCoverPhoto] = useState(null);

  var handleSubmit = (e) => {
    e.preventDefault();
    var productObj = {
      category,
      title,
      cost,
      description,
      quantity,
      coverPhoto,
    };
    uploadProduct(productObj);
  };
  return (
    <div>
        {/* <h1>Test</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="category"
        />
        <br />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <br />
        <input
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          type="text"
          placeholder="cost"
        />
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          cols="30"
          rows="10"
          placeholder="description"
        />
        <br />
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="text"
          placeholder="quantity"
        />
        <br />
        <label> Cover photo</label>
        <input onChange={(e) => setCoverPhoto(e.target.files[0])} type="file" />
        <button type="submit">submit</button>
      </form> */}

      <Cart/>
    </div>
  );
};

var actions = {
  uploadProduct,
};
export default connect(null, actions)(Test);

