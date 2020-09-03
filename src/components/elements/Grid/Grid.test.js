import React from 'react';
import { shallow } from 'enzyme';


import Grid from './Grid';

describe ("Grid Component " , () => {
   const  app = shallow(<Grid />);
    test("Component render" , () => {
        expect(app).toMatchSnapshot();
    })

    

});