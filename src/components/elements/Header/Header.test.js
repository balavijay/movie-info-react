import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import Header from './Header';

describe ("Header Component " , () => {
   const  app = shallow(<Header />);
    test("Component render" , () => {
        expect(app).toMatchSnapshot();
    })

    // test("Header component contains" , () => {
    //     const { getByText } = render(<Header />);
    //     const linkElement = getByText(/Movies Info/i);
    //     expect(linkElement).toBeInTheDocument();
         
    // });



});