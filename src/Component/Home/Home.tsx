import React from 'react';
import { Container } from '@mui/material';
import AboutCC from './AboutCC/AboutCC';
import AboutUs from './AboutUs/AboutUs';
import BannerTop from './BannerTop/BannerTop';
import HeaderTop from './HeaderTop';
import Plane from './Plane/Plane';
import ProductList from './ProductList/ProductList';
import Service from './Service/Service';
import Subscribe from './Subscribe/Subscribe';

const Header = () => {
    return (
        <div>
            <HeaderTop />
            <BannerTop />
            <Plane />
            <AboutCC />
            <Service />
            <ProductList />
            <Subscribe />
            <AboutUs />
        </div>
    );
};

export default Header;