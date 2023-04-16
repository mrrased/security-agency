import React from 'react';
import Container from '@mui/material/Container';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';

const AboutCC = () => {
    return (
        <Container maxWidth="lg">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='px-3'>
                    <h2 className='font-normal text-[#36187d] Bellota_Text text-[1.8rem]  md:text-[2.8rem] text-left '>Home Security</h2>
                    <p className='font-normal text-[#6c758f] Bellota_Text text-[1.1rem] md:text-[1.2rem] text-left '>Surveillance of the public using CCTV is common in many areas around the world. Video surveillance has generated significant debate about balancing its use with individuals' right to privacy even when in public</p>
                </div>
                <div>
                    <div className='flex items-center space-x-6'>
                        <div className='p-6 md:p-5 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'>
                            <LanguageIcon color="primary" sx={{ fontSize: 40 }}/>
                        </div>
                        <div>
                            <h3 className='font-normal text-[#36187d] Bellota_Text text-[1.4rem] md:text-[1.7rem] text-left'>Office Security</h3>
                            <p className='font-normal text-[#6c758f] Bellota_Text text-[1rem] md:text-[1.2rem] text-left mt-3'>CCTV equipment may be used to observe parts of a process from a central control room,</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-6 mt-8'>
                        <div className='p-6 md:p-5 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'>
                            <LockResetOutlinedIcon color="primary" sx={{ fontSize: 40 }}/>
                        </div>
                        <div>
                            <h3 className='font-normal text-[#36187d] Bellota_Text text-[1.4rem] md:text-[1.7rem] text-left'>CCTV Cameras</h3>
                            <p className='font-normal text-[#6c758f] Bellota_Text text-[1rem] md:text-[1.2rem] text-left mt-3'>CCTV equipment may be used to observe parts of a process from a central control room,</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-6 mt-8'>
                        <div className='p-6 md:p-5 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'>
                            <AccountCircleOutlinedIcon color="primary" sx={{ fontSize: 40 }}/>
                        </div>
                        <div>
                            <h3 className='font-normal text-[#36187d] Bellota_Text text-[1.4rem] md:text-[1.7rem] text-left'>CCTV Cameras</h3>
                            <p className='font-normal text-[#6c758f] Bellota_Text text-[1rem] md:text-[1.2rem] text-left mt-3'>CCTV equipment may be used to observe parts of a process from a central control room,</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutCC;