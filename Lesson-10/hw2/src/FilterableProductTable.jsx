import React from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

class FilterableProductTable extends React.Component {
  state = {
    filterText: '',
    inStockOnly: false
  };

  handlerInput(event){
    this.setState({
      filterText: event.target.value,
    })
  }

  handlerCheckbox(){
    this.setState({
      inStockOnly: !this.state.inStockOnly,
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onChangeInput={this.handlerInput.bind(this)}
          onChangeCheckBox={this.handlerCheckbox.bind(this)}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
