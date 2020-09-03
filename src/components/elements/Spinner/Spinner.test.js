import React from 'react';
import { shallow } from 'enzyme';


import Spinner from './Spinner';

describe ("Spinner Component " , () => {
   const  app = shallow(<Spinner />);
    test("Spinner render" , () => {
        expect(app).toMatchSnapshot();
    })

 
});