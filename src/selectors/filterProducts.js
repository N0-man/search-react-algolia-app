
export const filterProducts = (products, searchTerm) => {
    const filteredProducts = products.filter (product => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    return filteredProducts;
}