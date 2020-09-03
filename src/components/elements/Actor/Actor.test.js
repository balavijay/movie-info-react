import React from 'react';
import { shallow, mount } from 'enzyme';


import Actor from './Actor';

describe ("Actor Component " , () => {
    let actor = {name: "Test" };
    console.log("actor", actor.name);
   const  app = shallow(<Actor actor={actor} />);
    test("Component render" , () => {
        expect(app).toMatchSnapshot();
    });

    test("Actor component" , () => {

        const wrapper = mount(<Actor actor={actor} />);
        expect(wrapper.find('span').length).toEqual(1);
    });

    

});