import React from 'react';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import PopularMenu from '../PopulatMenu/PopularMenu';
import Feature from '../feature/Feature';
import Testimonial from '../testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;