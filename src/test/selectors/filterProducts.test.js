import {filterProducts} from '../../selectors/filterProducts'

const products = [
    {name: "Garden Eau de Parfum"},
    {name: "Dionysus small shoulder bag"}
]

const filteredProducts = [
    {name: "Garden Eau de Parfum"}
]

describe('For Garden Search Term', () => {
    it('should return Garden Eau de Parfum as filteredProducts from input products', () => {
        expect(filterProducts(products, 'Garden')).toEqual(filteredProducts)
    });    
});

describe('For Bla Search Term', () => {
    it('should return no results from input products', () => {
        expect(filterProducts(products, 'Bla')).toEqual([])
    });    
});
