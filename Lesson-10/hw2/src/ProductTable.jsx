import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

const getFilterProducts = (filterText, inStockOnly, products) => 
  products.filter(
    ({name, stocked}) => name.indexOf(filterText) !== -1 && (!inStockOnly || stocked)
  );

function getRows(products){
  const setCategories = [...new Set(products.map(({category}) => category))];
 
  const productObj = setCategories.reduce((acc, setCategory) => ({...acc, 
    ...{[setCategory]: products.filter(({category}) => category === setCategory)}
  }), {});

  return Object.keys(productObj).reduce((array, category) => [...array, 
    <ProductCategoryRow category={category} key={category} />,
    ...productObj[category].map(product => <ProductRow product={product} key={product.name} />)
  ], []);
}

const ProductTable = ({products, filterText, inStockOnly}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{getRows(getFilterProducts(filterText, inStockOnly, products))}</tbody>
    </table>
  );
}

export default ProductTable;