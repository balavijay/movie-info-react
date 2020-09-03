import React from 'react';
import { shallow, mount } from 'enzyme';


import MovieThumb from './MovieThumb';

describe ("MovieThumb Component " , () => {
   const  app = shallow(<MovieThumb />);
    test("MovieThumb render" , () => {
        expect(app).toMatchSnapshot();
    })

    

 
});