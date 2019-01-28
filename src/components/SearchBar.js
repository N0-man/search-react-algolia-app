import React from 'react';
import { connect } from 'react-redux';
import { searchProducts } from '../actions/searchProducts'

export const SearchBar = ({searchProducts}) => (
    <div>
        <input className="input-wrapper" type="text" onChange = {(e) => searchProducts(e.target.value)} placeholder="Search Whatever..."/>
    </div>
)

export default connect(undefined, {searchProducts})(SearchBar);