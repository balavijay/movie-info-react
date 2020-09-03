import React from 'react';
import { shallow } from 'enzyme';


import MovieInfo from './MovieInfo';

describe ("MovieInfo Component " , () => {
    let movie = {
        "poster_path" : ""
    }
   const  app = shallow(<MovieInfo movie={movie} />);
    test("MovieInfo render" , () => {
        expect(app).toMatchSnapshot();
    })

 
});