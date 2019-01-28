import React from "react";
import { connect } from "react-redux";

export const SearchResults = props => {
  if (props.filteredProducts.length === 0)
    return <p className="message">No Results Were Found For '{props.searchTerm}'</p>;

  return (
    <div>
      <p className="message">{props.filteredProducts.length} Results Found For '{props.searchTerm}'</p>;
      <div className="wrapper">
        {props.filteredProducts.map(product => (
          <div className="card">
            <img src={product.img}/>
            <h2>{product.name}</h2>
            <p class="price">$1999.99</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  filteredProducts: state.filteredProducts,
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(SearchResults);
