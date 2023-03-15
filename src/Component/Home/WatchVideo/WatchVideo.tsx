import React from 'react';
import { Container } from '@mui/material';
import img1 from '../../../Images/watch.jpg';
import YouTubeIcon from '@mui/icons-material/YouTube';


const WatchVideo = () => {
    return (
        <Container maxWidth="lg" className='mb-40'>
            <div>
                <h2 className='font-normal text-[#36187d] Bellota_Text text-[2.8rem] text-center mb-14'>Watch Video</h2>
                <div className='relative w-full h-[300px]'>
                    <div className='rounded-[40px] shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer mb-7 z-0'>
                        <img src={img1} alt="" className='w-full  rounded-[40px] ' />
                    </div>
                    <div className='absolute inset-2/4 top-full '>
                        <YouTubeIcon  color="primary" sx={{ fontSize: 80 }} className='p-4 z-10 bg-[#0196e3] bg-opacity-10 rounded-full hover:cursor-pointer hover:bg-opacity-20 transition duration-700 hover:duration-700' />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default WatchVideo;