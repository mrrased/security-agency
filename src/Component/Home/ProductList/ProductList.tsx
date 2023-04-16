import React from 'react';
import { Container } from '@mui/material';

const ProductList = () => {
    return (
        <Container maxWidth="lg" className='mb-32'>
            <h1 className='font-normal text-[#36187d] Bellota_Text text-[1.8rem] md:text-[2.8rem] text-center mb-14'>Prduct List</h1>
            <div>
                <div className='p-6 md:p-12 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-7'>
                    <div className='flex items-center justify-between mb-5'>
                        <h4 className='font-normal text-[#36187d] Bellota_Text text-[1.4rem] md:text-[1.7rem] text-center '>Home Security</h4>
                        <p className='font-normal text-[#36187d] Bellota_Text text-[1.4rem] md:text-[1.7rem]  text-center '>$139</p>
                    </div>
                    <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left'>CCTV. NVR. DVR. WIFI. With so many acronyms and a bevy of different devices, the world of home security cameras can be a lot, especially if you’re not familiar with home security in general. Well, we’re here to help. Over the years, we’ve tested out and reviewed dozens of security cameras, from wired to wireless, from indoor to outdoor and everything in between. Here, we’re going over the different types of cameras, whether you need one or not, how to install them, and more. If it’s security camera-related, we’ve got you covered.</p>
                </div>
                <div className='p-6 md:p-12 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-7'>
                    <div className='flex items-center justify-between mb-5'>
                        <h4 className='font-normal text-[#36187d] Bellota_Text text-[1.4rem] md:text-[1.7rem] text-center '>Office Security</h4>
                        <p className='font-normal text-[#36187d] Bellota_Text text-[1.4rem] md:text-[1.7rem] text-center '>$299</p>
                    </div>
                    <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left'>CCTV. NVR. DVR. WIFI. With so many acronyms and a bevy of different devices, the world of home security cameras can be a lot, especially if you’re not familiar with home security in general. Well, we’re here to help. Over the years, we’ve tested out and reviewed dozens of security cameras, from wired to wireless, from indoor to outdoor and everything in between. Here, we’re going over the different types of cameras, whether you need one or not, how to install them, and more. If it’s security camera-related, we’ve got you covered.</p>
                </div>
                <div className='p-6 md:p-12 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-7'>
                    <div className='flex items-center justify-between mb-5'>
                        <h4 className='font-normal text-[#36187d] Bellota_Text text-[1.4rem] md:text-[1.7rem] text-center '>CCTV Cameras</h4>
                        <p className='font-normal text-[#36187d] Bellota_Text text-[1.4rem] md:text-[1.7rem] text-center '>$339</p>
                    </div>
                    <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left'>CCTV. NVR. DVR. WIFI. With so many acronyms and a bevy of different devices, the world of home security cameras can be a lot, especially if you’re not familiar with home security in general. Well, we’re here to help. Over the years, we’ve tested out and reviewed dozens of security cameras, from wired to wireless, from indoor to outdoor and everything in between. Here, we’re going over the different types of cameras, whether you need one or not, how to install them, and more. If it’s security camera-related, we’ve got you covered.</p>
                </div>
            </div>
        </Container>
    );
};

export default ProductList;