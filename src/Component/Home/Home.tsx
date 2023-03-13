import React from 'react';
import AboutCC from './AboutCC/AboutCC';
import BannerTop from './BannerTop/BannerTop';
import HeaderTop from './HeaderTop';
import Plane from './Plane/Plane';
import ProductList from './ProductList/ProductList';
import Service from './Service/Service';

const Header = () => {
    return (
        <div>
            <HeaderTop />
            <BannerTop />
            <Plane />
            <AboutCC />
            <Service />
            <ProductList />
        </div>
    );
};

export default Header;