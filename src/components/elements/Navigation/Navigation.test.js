import React from 'react';
import { shallow } from 'enzyme';


import Navigation from './Navigation';

describe ("Navigation Component " , () => {
   const  app = shallow(<Navigation />);
    test("Navigation render" , () => {
        expect(app).toMatchSnapshot();
    })

 
});