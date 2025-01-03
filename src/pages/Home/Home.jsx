import React from 'react';
import Banner from '../Home/banner/Banner'
import PopularMenu from './PopulatMenu/PopularMenu';
import Testimonial from './testimonial/Testimonial';
import Category from './category/Category';
import Feature from './feature/Feature';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;