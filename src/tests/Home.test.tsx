import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';

describe('Home Component renders', () => {
    let container = shallow(<Home />);
    it('should render a div', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    });
})