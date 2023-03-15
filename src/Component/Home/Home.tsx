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
import OurTeam from './OurTeam/OurTeam';
import FollowUs from './FollowUs/FollowUs';
import Adress from './Address/Adress';
import Footer from './Footer/Footer';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import WatchVideo from './WatchVideo/WatchVideo';
import UsersSay from './UsersSay/UsersSay';

const Header = () => {
    return (
        <div>
            <HeaderTop />
            <BannerTop />
            <Plane />
            <AboutCC />
            <Service />
            <ProductList />
            <WatchVideo />
            <Subscribe />
            <AboutUs />
            <OurTeam />
            <UsersSay />
            <FollowUs />
            <Adress />
            <HeaderBottom />
            <Footer />
        </div>
    );
};

export default Header;