import {createStore} from 'redux'
import productsReducer from '../reducers/products'

export default () => (
    createStore(productsReducer)
)