import React from "react";
import {connect} from "react-redux"

export const SearchResults = (props) => (
  <div>
    <ul>
      {props.filteredProducts.map(product => (
        <li>{product.name}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
    filteredProducts: state.filteredProducts
});

export default connect (mapStateToProps)(SearchResults);