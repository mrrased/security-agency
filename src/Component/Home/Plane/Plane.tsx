import React from 'react';
import Container from '@mui/material/Container';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Plane = () => {
    return (
        <Container maxWidth="lg" className='pt-[144px] pb-[99px] mb-20' >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='flex items-center justify-center space-x-8 mb-8 md:mb-0'>
                    <div className='p-6 md:p-12 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'>
                        <GppGoodOutlinedIcon color="primary" sx={{ fontSize: 75 }}/>
                    </div>
                    <h4 className='text-[#36187d] Bellota_Text text-[1.2rem] font-normal'>Home Security</h4>
                </div>
                <div className='flex items-center justify-center space-x-8 mb-8 md:mb-0'>
                    <div className='p-6 md:p-12 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'>
                        <EmailOutlinedIcon color="primary" sx={{ fontSize: 75 }}/>
                    </div>
                    <h4 className='text-[#36187d] Bellota_Text text-[1.2rem] font-normal'>Office Security</h4>
                </div>
                <div className='flex items-center justify-center space-x-8'>
                    <div className='p-6 md:p-12 rounded-full shadow-boxShadow transition duration-700 hover:bg-white hover:duration-700 hover:cursor-pointer'>
                        <AutoAwesomeMosaicOutlinedIcon color="primary" sx={{ fontSize: 75 }}/>
                    </div>
                    <h4 className='text-[#36187d] Bellota_Text text-[1.2rem] font-normal'>All Cameras</h4>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div>
                    <h3 className='text-center mt-[6rem] px-6 py-4 md:w-[440px] bg-[#ea2396] text-white uppercase rounded-full'>NEW SECURITY PLAN IS AVAILABLE. START NOW!</h3>
                </div>
            </div>
        </Container>
    );
};

export default Plane;