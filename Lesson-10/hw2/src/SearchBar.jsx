import React from 'react';

const SearchBar = ({filterText, inStockOnly, onChangeInput, onChangeCheckBox}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText} 
        onChange={onChangeInput}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly} 
          onChange={onChangeCheckBox}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;
