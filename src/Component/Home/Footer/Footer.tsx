import React from 'react';
import { Container } from '@mui/material';
import facebook from '../../../Images/facebook-logo.png';
import instagram from '../../../Images/instagram.png';
import twitter from '../../../Images/twitter.png';


const Footer = () => {
    return (
        <Container maxWidth="lg" className='mt-5 pb-14'>
            <div className='flex justify-between border-t border-black border-opacity-5 pt-3' >
                <div>
                    <p className='font-normal text-[#6c758f] Bellota_Text text-lg'>© Copyright 2023 Security Agency - All Rights Reserved</p>
                </div>
                <ul className='flex space-x-4'>
                    <li><img src={facebook} alt="" className='h-5 w-5 ' /></li>
                    <li><img src={instagram} alt="" className='h-5 w-5 ' /></li>
                    <li><img src={twitter} alt="" className='h-5 w-5 ' /></li>
                </ul>
            </div>
        </Container>
    );
};

export default Footer;