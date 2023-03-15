import React from 'react';
import { Container } from '@mui/material';
import facebook from '../../../Images/facebook-logo.png';
import twitter from '../../../Images/twitter.png';
import instagram from '../../../Images/instagram.png';

const FollowUs = () => {
    return (
        <Container maxWidth="lg" className='mt-40'>
            <div className='lg:flex items-center justify-around'>
                <div>
                <h3 className='font-normal text-[#36187d] Bellota_Text text-[2.4rem] text-center lg:text-left mb-2 lg:mb-0'>Follow Us</h3>
                <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-center lg:text-left lg:w-[35rem] mb-5 lg:mb-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet odio. Aenean eget lorem pellentesque, imperdiet ex convallis, iaculis justo.</p>
                </div>
                <ul className='flex items-center justify-center lg:justify-start space-x-4'>
                    <li className='p-7 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={facebook} alt="" className='h-5 w-5 ' /></li>
                    <li className='p-7 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={twitter} alt="" className='h-5 w-5 ' /></li>
                    <li className='p-7 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={instagram} alt="" className='h-5 w-5 ' /></li>
                </ul>
            </div>
        </Container>
    );
};

export default FollowUs;