import productsReducer from '../../reducers/products';
import productsFixture from '../../fixtures/products'

const stateFixture = {
    products: productsFixture,
    filteredProducts: []
}

const filteredProducts = [
    {name: "Garden Eau de Parfum"}
]

test('should setup default products and filteredProducts value', () => {
    const state = productsReducer (undefined, {type: '@@INIT'})
    expect(state).toEqual({products: productsFixture, filteredProducts: productsFixture})
});

test('should filter products based on search term', () => {
    const state = productsReducer (stateFixture, {type: 'SEARCH_PRODUCTS', searchTerm: 'Garden'});
    expect(state.filteredProducts).toEqual(filteredProducts);
});