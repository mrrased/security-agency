import React from 'react';
import { Container } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import img1 from '../../../Images/cc-img1.jpg';
import img2 from '../../../Images/cc-img2.jpg';


const Service = () => {
    return (
        <Container maxWidth="lg" className='mt-32 mb-32'>
            <div>
                <h3 className='font-normal text-[#36187d] Bellota_Text text-[2.8rem] text-left mb-5'>Our Services</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-8 px-3'>
                    <div className='flex items-center justify-around p-6 md:p-12 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-7'>
                        <p className='font-normal text-[#0196e3] Bellota_Text text-[1.7rem] text-left'>01</p>
                        <h2 className='font-normal text-[#ea2396] Bellota_Text text-[1.7rem] text-left'>Home Security</h2>
                        <KeyboardArrowRightOutlinedIcon color="primary" sx={{ fontSize: 40 }}/>
                    </div>
                    <div className='flex items-center justify-around p-6 md:p-12 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-7'>
                        <p className='font-normal text-[#0196e3] Bellota_Text text-[1.7rem] text-left'>02</p>
                        <h2 className='font-normal text-[#ea2396] Bellota_Text text-[1.7rem] text-left'>Office Security</h2>
                        <KeyboardArrowRightOutlinedIcon color="primary" sx={{ fontSize: 40 }}/>
                    </div>
                    <div className='flex items-center justify-around p-6 md:p-12 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-12'>
                        <p className='font-normal text-[#0196e3] Bellota_Text text-[1.7rem] text-left'>03</p>
                        <h2 className='font-normal text-[#ea2396] Bellota_Text text-[1.7rem] text-left'>Cyber Security</h2>
                        <KeyboardArrowRightOutlinedIcon color="primary" sx={{ fontSize: 40 }}/>
                    </div>
                    <div className='flex items-center justify-around p-6 md:p-12 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-12'>
                        <p className='font-normal text-[#0196e3] Bellota_Text text-[1.7rem] text-left'>04</p>
                        <h2 className='font-normal text-[#ea2396] Bellota_Text text-[1.7rem] text-left'>CCTV Cameras</h2>
                        <KeyboardArrowRightOutlinedIcon color="primary" sx={{ fontSize: 40 }}/>
                    </div>
                    <div className='p-6 md:p-6 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'>
                        <img src={img1} alt="" className='rounded-[40px] h-[220px] md:h-[300px] w-full transition ease-in-out delay-150 duration-300' />
                        <h2 className='font-normal text-[#36187d] Bellota_Text text-[1.7rem] text-center mt-6'>Home Security</h2>
                    </div>
                    <div className='p-6 md:p-6 rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'>
                        <img src={img2} alt="" className='rounded-[40px] h-[220px] md:h-[300px] w-full' />
                        <h2 className='font-normal text-[#36187d] Bellota_Text text-[1.7rem] text-center mt-6'>Office Security</h2>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Service;