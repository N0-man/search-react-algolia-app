import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.filterProducts = this.filterProducts.bind(this)
        this.state = {
            products: [
                {name: "Garden Eau de Parfum"},
                {name: "Dionysus small shoulder bag"},
                {name: "Gucci Bloom Nettare Di Fiori"},
                {name: "Growing Pains with Hari Nef"},
                {name: "CRUISE 2019"},
                {name: "The Rajah Bag"},
                {name: "Gucci GG Belt"},
                {name: "Premiere Partie Flacons Vitrifies"}
            ],
            filteredProducts: []
        }
    }

    filterProducts (e) {
        const filteredProducts = this.state.products.filter (product => {
            return product.name.toLowerCase().includes(e.target.value.toLowerCase())
        });
        
        this.setState ( () => ({filteredProducts: filteredProducts}))
    }

    componentDidMount () {
        this.setState ( () => ({
            filteredProducts: this.state.products
        }))
    }

    render () {
        return (
            <div>
                <input type="text" onChange = {this.filterProducts} placeholder="Search Whatever..."/>
                <ul>
                    {this.state.filteredProducts.map ( product => (<li>{product.name}</li>))}
                </ul>
            </div>
        )
    }
}