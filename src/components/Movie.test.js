import React from 'react';
import { shallow, mount } from 'enzyme';

import Movie from './Movie';

describe ("Movie Component " , () => {
   const  app = shallow(<Movie />);
    test("Component rendered" , () => {
        expect(app).toMatchSnapshot();
    });

    
});