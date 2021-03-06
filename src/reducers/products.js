import {filterProducts} from '../selectors/filterProducts'
import productsFixture from '../fixtures/products'

//Product Reducer
const productReducerDefaultState = {
    products: productsFixture,
    filteredProducts: productsFixture,
    searchTerm: ''
}

export default (state = productReducerDefaultState, action) => {
    switch (action.type) {
        case 'SEARCH_PRODUCTS':
            return {
                ...state,
                filteredProducts: filterProducts(state.products, action.searchTerm),
                searchTerm: action.searchTerm
            }
        default:
            return state;
    }
}