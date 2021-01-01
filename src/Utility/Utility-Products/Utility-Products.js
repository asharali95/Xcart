export var categorizedProduct = (productarr) => {
  var categories = [];
  var categoryName;
  var isCategoryExists;
  var newCategory;
  for (var product of productarr) {
    categoryName = product.category;
    isCategoryExists = categories.some(
      (categoryObj) => categoryObj.category === categoryName
    );
    if (isCategoryExists) {
      for (var cat of categories) {
        if (cat.category === product.category) {
          cat.products.push(product);
        }
      }
    } else {
      //if category doesnot exists
      newCategory = {
        category: product.category,
        products: [product],
      };
      categories.push(newCategory);
    }
  }
  return categories;
};

export var productionAdditionInCart = (existingProducts, upcomingProduct) => {
  try {
    var exist = existingProducts.some(
      (existingProduct) => existingProduct.id === upcomingProduct.id
    );
    if (!exist) {
      return [...existingProducts, { ...upcomingProduct, quantity: 1 }];
    } else {
      return existingProducts.map((existingProduct) => {
        if (existingProduct.id === upcomingProduct.id) {
          return {
            ...existingProduct,
            quantity: existingProduct.quantity + 1,
          };
        } else return existingProduct;
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export var productRemovalFromCart = (existingProducts, upcomingProductId) => {
  try {
    var product = existingProducts.find(
      (existingProduct) => existingProduct.id === upcomingProductId
    );
    if(product){
      if (product.quantity > 1) {
        return existingProducts.map((existingProduct) => {
          if (existingProduct.id === upcomingProductId) {
            return {
              ...existingProduct,
              quantity: existingProduct.quantity - 1,
            };
          } else return existingProduct;
        });
      } else {
        return existingProducts.filter(
          (existingProduct) => existingProduct.id !== upcomingProductId
        );
      }
    } else return existingProducts
    
  } catch (error) {
    console.log(error)
  }
};
