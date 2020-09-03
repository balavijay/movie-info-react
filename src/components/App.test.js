import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe ("App Component " , () => {
   const  app = shallow(<App />);
    test("Component rendered" , () => {
        expect(app).toMatchSnapshot();
    })

    test("Header component" , () => {
        expect(app.find('Header').exists()).toBe(true);
    });
 
});