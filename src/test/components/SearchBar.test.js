import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import {SearchBar} from '../../components/SearchBar'

test('should render search bar correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<SearchBar/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});