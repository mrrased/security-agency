import React from 'react';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserGroup, faPlane } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '@mui/icons-material/Menu';
import facebook from '../../Images/facebook-logo.png';
import twitter from '../../Images/twitter.png';
import instagram from '../../Images/instagram.png';



const HeaderTop = () => {
    return (
        <Container maxWidth="lg">
            <div className='flex items-center justify-around py-10'>
                <div>
                    <h2>Security Agency</h2>
                </div>
                <ul className='hidden lg:flex justify-evenly space-x-10 font-normal text-[#6c758f] Bellota_Text text-xl'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>+88 (017) 329 20 164</li>
                </ul>
                <ul className='hidden lg:flex items-center justify-center space-x-4'>
                    <li className='p-7 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={facebook} alt="f" className='h-5 w-5 ' /></li>
                    <li className='p-7 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={twitter} alt="f" className='h-5 w-5' /></li>
                    <li className='p-7 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'><img src={instagram} alt="f" className='h-5 w-5' /></li>
                </ul>
                <div className='block lg:hidden'>
                    <MenuIcon color="action" sx={{ fontSize: 75 }}/>
                </div>
            </div>
        </Container>
    );
};

export default HeaderTop;