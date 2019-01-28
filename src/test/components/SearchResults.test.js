import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import {SearchResults} from '../../components/SearchResults'

test('should render search results correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<SearchResults />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});