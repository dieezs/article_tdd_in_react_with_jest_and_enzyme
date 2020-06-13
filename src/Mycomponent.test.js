import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import MyComponent from './MyComponent';

Enzyme.configure({
    adapter: new Adapter()
})

describe('Testing MyComponent', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<MyComponent />);
    })

    it('should looking for `Hello World!` text in tag H1', () => {

        const elementToBeTested = wrapper.find('h1').text();
        expect(elementToBeTested).toContain('Hello World!')

    });

    it('verify if exists the div `algumaDiv` in component', () => {

        const nomeDiv = <div className="algumaDiv"></div>
        const elementToBeTested = wrapper.contains(nomeDiv);
        expect(elementToBeTested).toBe(true);

    })


})
