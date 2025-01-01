import React from 'react';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import PopularMenu from '../PopulatMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;