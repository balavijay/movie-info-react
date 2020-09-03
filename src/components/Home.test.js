import React from 'react';
import { shallow, mount } from 'enzyme';

import Home from './Home';

describe ("Home Component " , () => {

   const  app = shallow(<Home />);

    test("Component rendered" , () => {
        expect(app).toMatchSnapshot();
    });

    test("Home component" , () => {

        const wrapper = mount(<Home   />);
        expect(wrapper.find('MovieThumb').length).toEqual(0);
    });



     
 
});