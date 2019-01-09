export const searchProducts = (searchTerm = '') => ({
    type: 'SEARCH_PRODUCTS',
    searchTerm: searchTerm
});