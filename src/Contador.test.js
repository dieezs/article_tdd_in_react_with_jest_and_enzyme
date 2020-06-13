import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Contador from './Contador';

Enzyme.configure({
    adapter: new Adapter()
})

describe('Testando Contador', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Contador/>)
    })

    it('Verify if exists Increment Button', () => {

        const button = wrapper.find('#incrementBtn').text();
        expect(button).toBe('Increment');

    })

    it('Verify if exists Increment Button', () => {

        const button = wrapper.find('#decrementBtn').text();
        expect(button).toBe('Decrement');

    })

    it('Verify if exists the counter state', () =>{
        const counter = wrapper.find('.counter').text();
        expect(counter).toBe("0");
    })

    it('Verify when clicking on increment button the state change', () =>{
        wrapper.find('#incrementBtn').simulate('click');
        const counter = wrapper.find('.counter').text();
        expect(counter).toBe("1");
    })

    it('Verify when clicking on decrement button the state change', () =>{
        //2 clicks
        wrapper.find('#incrementBtn').simulate('click');
        wrapper.find('#incrementBtn').simulate('click');
        //1 click on decrement button. the state value should be 1
        wrapper.find('#decrementBtn').simulate('click');

        const counter = wrapper.find('.counter').text();
        expect(counter).toBe("1");
    })

    it('test mount and render', () => {
        const testeShallow = shallow(<Contador/>)
        const testeMount = mount(<Contador/>)
        const testeRender = render(<Contador/>)
        console.log(testeRender.debug());
    })

})
