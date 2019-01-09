import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'; //Normalize CSS - base styling for all browsers
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <SearchBar/>
        <SearchResults/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
