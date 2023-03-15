import React from 'react';
import { Container } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const Adress = () => {
    return (
        <Container maxWidth='lg' className='mt-40'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='flex p-6 md:p-10 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-7'>
                    <div>
                        <h3 className='font-normal text-[#36187d] Bellota_Text text-[1.7rem] text-left mb-2'>Company Office</h3>
                        <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus tortor, quis sollicitudin mauris ipsum a elit.</p>
                        <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left mb-3'>South Carolina 3531 Camden Place 54</p>
                        <h5 className='font-normal text-[#0196e3] Bellota_Text text-[1.4rem] lg:text-[1.7rem] text-left '>+88 (017) 32 920 164</h5>
                    </div>
                    <div>
                        <div className='p-3 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-12 md:mb-8'><LanguageIcon sx={{ fontSize: 30 }} className='text-[#0196e3]' /></div>
                        <div className='p-3 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-12 md:mb-8'><LocationOnOutlinedIcon sx={{ fontSize: 30 }} className='text-[#0196e3]' /></div>
                        <div className='p-3 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer '><LocalPhoneOutlinedIcon sx={{ fontSize: 30 }} className='text-[#0196e3]' /></div>
                    </div>
                </div>
                <div className='flex p-6 md:p-10 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-7'>
                    <div>
                        <h3 className='font-normal text-[#36187d] Bellota_Text text-[1.7rem] text-left mb-2'>Customer Service</h3>
                        <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus tortor, quis sollicitudin mauris ipsum a elit.</p>
                        <p className='font-normal text-[#6c758f] Bellota_Text text-[1.2rem] text-left mb-3'>South Carolina 3531 Camden Place 54</p>
                        <h5 className='font-normal text-[#0196e3] Bellota_Text text-[1.4rem] lg:text-[1.7rem] text-left '>+88 (017) 32 920 164</h5>
                    </div>
                    <div>
                        <div className='p-3  rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-12 md:mb-8'><LanguageIcon sx={{ fontSize: 30 }} className='text-[#0196e3]' /></div>
                        <div className='p-3  rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-12 md:mb-8'><LocationOnOutlinedIcon sx={{ fontSize: 30 }} className='text-[#0196e3]' /></div>
                        <div className='p-3  rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer '><LocalPhoneOutlinedIcon sx={{ fontSize: 30 }} className='text-[#0196e3]' /></div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Adress;