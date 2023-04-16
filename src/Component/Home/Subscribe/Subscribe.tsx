import React from 'react';
import { Container } from '@mui/material';

const Subscribe = () => {
    return (
        <Container maxWidth="lg" className='lg:mt-[470px]'>
            <div className='md:flex items-center justify-around p-6 md:p-12 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-7'>
                <div>
                    <h1 className='font-normal text-[#36187d] Bellota_Text text-[1.8rem] md:text-[2.8rem] text-center md:text-left'>Subscribe to the news!</h1>
                    <p className='font-normal text-[#36187d] Bellota_Text text-[1.2rem] text-center md:text-left mt-2 mb-3 md:mt-0 md:mb-0'>Stay on top of our most  actual news!</p>
                </div>
                <button className='px-10 py-4 bg-[#35b8fc] cursor-pointer text-white Bellota_Text text-[1.1rem] rounded-full hover:bg-[#2a95cc] transition duration-700 hover:duration-700 hover:cursor-pointer block md:inline mx-auto md:mx-0 '>Subscribe Now</button>
            </div>
        </Container>
    );
};

export default Subscribe;