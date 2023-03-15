import { Container } from '@mui/material';
import React from 'react';

const HeaderBottom = () => {
    return (
        <Container maxWidth="lg" className='mt-40 mb-10'>
            <ul className='flex justify-center md:justify-end space-x-5 font-normal text-[#6c758f] Bellota_Text text-base md:text-xl'>
                <li className='hover:cursor-pointer hover:underline'>Home</li>
                <li className='hover:cursor-pointer hover:underline'>About</li>
                <li className='hover:cursor-pointer hover:underline'>Terms</li>
                <li className='hover:cursor-pointer hover:underline'>Careers</li>
                <li className='hover:cursor-pointer hover:underline'>Contact</li>
            </ul>   
        </Container>
    );
};

export default HeaderBottom;