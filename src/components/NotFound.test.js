import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './NotFound';

describe ("NotFound Component " , () => {
   const  app = shallow(<NotFound />);
    test("Component rendered" , () => {
        expect(app).toMatchSnapshot();
    })
});