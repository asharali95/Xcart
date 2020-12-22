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
    return(categories);
  };